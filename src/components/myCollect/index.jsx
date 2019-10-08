import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import { connect } from  'react-redux'

import noOrder from 'asset/logo/noOrder.png'//无订单logo

import { Header, 
    Back, 
    Title, 
    NavWrap,
    ContentWrap
} from  './style'

import {
    getCollectFood
} from './store/createAction'

import Foot from 'common/foot/index'

class MyCollect extends React.Component {
    render() {
       return (
            <Fragment>
                <Header>
                    <Back>
                        <div className= "icon-wrap" onClick = { this.hashBakc }>
                            <i className = "iconfont icon">&#xe682;</i>
                        </div>
                    </Back>
                    <Title>我的收藏</Title>
                    <NavWrap>
                        <Link to = "/user/page" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe613;</i>
                        </Link>
                    </NavWrap>
                </Header>
                <ContentWrap>
                    {this.createList()}
                    <Foot nowShop="我的收藏" bgColor = "#fff" loginMsg ="已登入"/>
                </ContentWrap>
            </Fragment>
       ) 
    }
    hashBakc() {
        window.history.back();
    }
    componentDidMount() {
        this.props.getCollect();
    }
    createList() {
        return( 
            this.props.collectData.length == 0  ? 
                <div className="noOrder">
                    <img src={noOrder} alt=""/>
                    <p>您还没有相关的收藏</p>
                </div>
                :
                this.props.collectData.map( (item,index) => {
                    return (
                        <div className="wrap" key={index}>
                            <div className="title-img">
                                <img src={item.title_img} alt=""/>
                            </div>
                            <div className="content">
                                <h5>{item.s_name}</h5>
                                <p className="food-name">{item.foodname}</p>
                                <div className="price">
                                    <p>{item.price}<span>元</span></p>
                                    <p>已售：{item.sold}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
        )
    }

}

const mapStateToProps = (state)=> {
    return {
        collectData: state.myCollect.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCollect() {
            const action = getCollectFood(sessionStorage.getItem("UsName"));
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MyCollect)