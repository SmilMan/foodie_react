import React,{Fragment} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import { getImgBar } from './store/createAction' 
import { Header, 
    Back, 
    Title, 
    BarWrap,
    ShowImgBar
} from  './style'

import Foot from 'common/foot/index'

class ImgBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showBar: false
        }
    }
    render() {
        return (
            <Fragment>
                <Header>
                    <Back>
                        <div className= "icon-wrap" onClick = { this.hashBakc }>
                            <i className = "iconfont icon">&#xe682;</i>
                        </div>
                    </Back>
                    <Title>商家相册</Title>
                </Header>
                <BarWrap>
                    <ul style = {{minHeight: "390px"}}>
                        {
                            this.props.imgBar.length <= 0 ? " " : this.props.imgBar.map(item => { 
                                return (
                                    <li className="img-item" key= {item.id} onClick={this.showBar.bind(this, item.imgurl)}>
                                        <img src={item.imgurl} alt=""/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Foot/>
                </BarWrap>
                <ShowImgBar onClick={this.hiddenBar.bind(this)} style={this.state.showBar ? {display: "flex",alignItems: "center"} : {display: "none"}}>
                    <img src={sessionStorage.getItem("shopImg")} alt=""/>
                </ShowImgBar>
           </Fragment>
        )
    }
    showBar(param) {
        sessionStorage.setItem("shopImg",param)
        this.setState({
            showBar: true
        })
    }
    hiddenBar(){
        this.setState({
            showBar: false
        })
    }
    hashBakc() {
        window.history.back();
    }
    componentDidMount() {
        const param = this.props.match.params.shopImg.split('.')[0];
        this.props.initImgBar(param)
    }
}

const mapStateToProps = (state) => {
    return {
        imgBar: state.imgBar.imgBar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initImgBar(param) {
            let action = getImgBar(param);
            dispatch(action); 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImgBar)

