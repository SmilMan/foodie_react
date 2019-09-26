import React,{Fragment} from 'react'

import { connect } from 'react-redux'

import {Link} from 'react-router-dom'

import { Header, 
    Back, 
    Title, 
    NavWrap,
    UserTitle,
    OrderWrap
} from  './style'



class MyPage extends React.Component {
    render() {
        return (
            <Fragment>
                <Header>
                    <Back>
                        <div className= "icon-wrap" onClick = { this.hashBakc }>
                            <i className = "iconfont icon">&#xe682;</i>
                        </div>
                    </Back>
                    <Title>我的foodie</Title>
                    <NavWrap>
                        <Link to = "/" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe615;</i>
                        </Link>
                    </NavWrap>
                </Header>
                <UserTitle>
                    <img src="https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/my-photo.png" alt=""/>
                    <div className="user-info">
                        <div className="user-photo">
                            <img src="https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/pic-default.png" alt=""/>
                        </div>
                        <div className="user-name">
                            <p className="name">{sessionStorage.getItem("UsName")}</p>
                            <p className="money">账户余额：<span>0</span>元</p>
                        </div>
                        <Link to="/user/info" className="change-info">></Link>
                    </div>
                </UserTitle>
                <OrderWrap>
                    <a className="all-order">
                        <p className="content">
                            <i className="iconfont">&#xe62c;</i>
                            <span>全部订单</span>
                        </p>
                        <p className="right-icon">></p>
                    </a>
                    <ul className="order-dec">
                        <li>            
                            <i className="iconfont">&#xe616;</i>
                            <p>待付款</p>
                        </li>
                        <li>            
                            <i className="iconfont">&#xe62a;</i>
                            <p>待使用</p>
                        </li>
                        <li>            
                            <i className="iconfont">&#xe63d;</i>
                            <p>待评价</p>
                        </li>
                    </ul>
                    <div className="item-list">
                        <a className="all-order">
                            <p className="content">
                                <i className="iconfont" style={{background:"#0092DE"}}>&#xe637;</i>
                                <span>我的收藏</span>
                            </p>
                            <p className="right-icon">></p>
                        </a>
                        <Link to="/user/juan" className="all-order">
                            <p className="content">
                                <i className="iconfont" style={{background:"#EB2C00"}}>&#xe666;</i>
                                <span>我的抵用卷</span>
                            </p>
                            <p className="right-icon">></p>
                        </Link>
                        <Link to="/user/luckDraw" className="all-order">
                            <p className="content">
                                <i className="iconfont" style={{background:"#F5B345"}}>&#xe612;</i>
                                <span>我的抽奖单</span>
                            </p>
                            <p className="right-icon">></p>
                        </Link>
                        <Link to="/user/jifen" className="all-order">
                            <p className="content">
                                <i className="iconfont" style={{background:"#F5B786"}}>&#xe62b;</i>
                                <span>积分换礼品</span>
                            </p>
                            <p className="right-icon">></p>
                        </Link>
                    </div>
                </OrderWrap>
            </Fragment>
        )
    }
    hashBakc() {
        window.history.go(-2);
    }
}


// const mapStateToProps = (state) => {
//     return {
//         name: state.myPage.userName
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {

//     }
// }
export default connect(null, null) (MyPage)