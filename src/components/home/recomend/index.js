import React from 'react'
import { connect } from 'react-redux';
import { Wrap, Title, Content } from './style'
import loading from '../../../asset/logo/loding.gif'
import { getAllShop } from './store/createAction'
import store from '../../../store/store'


class Recommend extends React.Component{

    render() {
        return (
            <Wrap>
                <Title>
                    全部美食 》
                </Title>
                <Content>
                    <ul>
                        { this.createList() }
                    </ul>
                </Content>
                <div 
                    className = {this.props.loading ? "show" : "hidden"}
                    style = {{textAlign: "center", marginTop: "2rem"}}
                >
                    <img 
                        alt = "XXX" 
                        src = {loading}
                    />
                </div>
            </Wrap>
        )
    }
    createList() {
        return this.props.allShop && this.props.allShop.map((ele, index) => {
            return (
                <li key = {index}>
                    <div className = "pic-wrap">
                        <img alt = "XXX" src = {ele.title_img}/>
                    </div>
                    <div className = "dec-wrap">
                    <div className = "name">{ele.s_name }</div>
                    <div className = "location">[{ele.location}]<span style = {{color: "rgb(190, 158, 77)",background: "rgb(251, 244, 228)"}}>{ele.dec}</span></div>
                        <div className = "many">
                            <span className = "classfy">{ele.classfy}</span>
                            <span className = "totle">￥{ele.price}/人</span>
                            <span className = "out">总评价：<span className = "num">{ele.num}</span></span>
                        </div>
                    </div>
                </li>
            )
        })
    }
    componentDidMount(){
        const action = getAllShop();
        setTimeout(() => {store.dispatch(action)}, 1000);
    }
}

const mapStateToProps = (state) => {
    return {
        allShop: state.allshop.AllShop,
        loading: state.allshop.loading
    }
}
export default connect(mapStateToProps,null)(Recommend)