import React from 'react'
import { connect } from 'react-redux';
import { Wrap, Title, Content } from './style'
import loading from 'asset/logo/loading.gif'
import { getAllShop } from './store/createAction'
// import store from 'mainStore/store'   有了react-redux就可以不用引入store。来派发action.store.dispatch(action);

import { Link, withRouter }  from 'react-router-dom'


class Recommend extends React.Component{

    render() {
        return (
            <Wrap>
                <Title>
                    {this.props.navText} >
                </Title>
                <Content>
                    <ul>
                        { this.createList() }
                    </ul>
                </Content>
                <div 
                    className = {this.props.loading ? "show" : "hidden"}
                    style = {{textAlign: "center",marginBottom: "1rem"}}
                >
                    <img 
                        alt = " " 
                        src = {loading}
                        style = {{width:"100%", height:"100%"}}
                    />
                </div>
            </Wrap>
        )
    }
    createList() {
        return this.props.allShop && this.props.allShop.map((ele, index) => {
            return (
                <li key = {index}> 
                    <Link to = {"shopDetail/" + ele.s_name + ".html"} className = "navlink" onClick= {this.priceStorage.bind(this,ele.price,ele.num)}>
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
                    </Link>
                </li>
            )
        })
    }
    /**
     * 
     * @param { price } price 商店的单人价格 
     */
    priceStorage(price, star) {
        sessionStorage.setItem("price", price);
        sessionStorage.setItem("star",star);
    }

    /**
     *  监听路由的变化，当点击浏览器的前进和回退的时候，相应的首页得到响应 
     * sessionStorage.setItem("shopType") 是在点击icon时设置的
     */
    componentDidMount() {
        window.onhashchange = () => {
            if (sessionStorage.getItem("shopType") !== this.props.match.params.name && this.props.match.params.name) {
                this.props.getTypeShop(this.props.match.params.name);
            }
        }

        if (this.props.match.params.name) { 
            this.props.getTypeShop(this.props.match.params.name);
            this.props.changeLoading();
            // store.dispatch({
            //     type: "get_type_shop",
            //     shopType: this.props.match.params.name
            // });
            // store.dispatch({
            //     type: "chang_loading",
            //     data: false
            // });
        }else{
            setTimeout(() => {
                this.props.getAllData();
                // store.dispatch(action);
            },1000)
        }

    }
    shouldComponentUpdate(nextProps, nextState) {
        if (!nextProps.allShop) {
            return true;
        } else{
            if (nextProps.allShop !== this.props.allShop) {
                return true; 
                } else {
                    return false;
                }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        allShop: state.allShop.AllShop,
        loading: state.allShop.loading,
        navText: state.allShop.navText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTypeShop(shopType) {
            const action = {
                type: "get_type_shop",
                shopType
            };
            dispatch(action);
        },
        changeLoading() {
            const action = {
                type: "chang_loading",
                data: false
            };
            dispatch(action);
        },
        getAllData() {
            const action = getAllShop();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Recommend))