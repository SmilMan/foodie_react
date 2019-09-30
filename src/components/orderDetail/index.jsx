import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import go from 'asset/logo/go1.jpg'
import {connect} from 'react-redux'

import {getOrderDetail} from './store/createAction'

import { 
    Header,
    ContentWrap
} from  './style'

class OrderDetail extends React.Component {
    render() {
       return (
            <Fragment>
                {/* <Header>
                    <Back>
                        <div className= "icon-wrap" onClick = { this.hashBakc }>
                            <i className = "iconfont icon">&#xe682;</i>
                        </div>
                    </Back>
                    <Title></Title>
                    <NavWrap>
                        <Link to = "/" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe615;</i>
                        </Link>
                    </NavWrap>
                </Header> */}
                <Header>
                    <div className= "icon-wrap icon" onClick = { this.hashBakc }>
                        <i className = "iconfont">&#xe682;</i>
                    </div>
                    <Link to = "/user/page" className= "icon-wrap right-nav">
                        <i className = "iconfont icon icon-nav">&#xe613;</i>
                    </Link>   
                    <img src={go} alt=""/>
                </Header>
                <ContentWrap>
                    {this.createList()}
                </ContentWrap>

            </Fragment>
       ) 
    }
    hashBakc() {
        window.history.back();
    }
    componentDidMount() {
        const param = this.props.match.params.orderNumber;
        this.props.orderForNumber(param);
    }
    createList() {
        if (this.props.order.length > 0) {
            let {
                food_name,
                location,
                order_time,
                price,
                totle_price,
                user_name,
                shop_name
            } = this.props.order[0]
            return (
                <Fragment>
                    <h5>订单明细</h5>
                    <div className="order-wrap">
                        <div className="item-list">
                            店名 :
                            <span className="item">{shop_name}</span>
                        </div>
                        <div className="item-list">
                            食品 :
                            <span className="item" style={{width: "5rem",whiteSpace: "nowrap",overflow: "hidden", textOverflow: "ellipsis",textAlign: "right"}}>{food_name}</span>
                        </div>
                        <div className="item-list">
                            单价 :
                            <span className="item">￥{price}</span>
                        </div>
                        <div className="item-list">
                            总价 : 
                            <span className="item totle-price">￥{totle_price}</span>
                        </div>
                        <div className="item-list">
                            下单时间 :
                            <span className="item">
                                {order_time}
                            </span>
                        </div>
                        <div className="item-list">
                            订单编号 : 
                            <span className="item">{this.props.match.params.orderNumber}</span>
                        </div>
                        <div className="item-list">
                            下单方式 : 
                            <span className="item">在线支付</span>
                        </div>
                    </div>

                    <h5>配送信息</h5>
                    <div className="order-wrap">
                        <div className="item-list">
                            点餐人 :
                            <span className="item">{user_name}</span>
                        </div>
                        <div className="item-list">
                            送餐时间 :
                            <span className="item">立即配送</span>
                        </div>
                        <div className="item-list">
                            配送地址(详细地址) :
                        </div>
                        <div className="item-list">
                            {location}
                        </div>
                    </div>
                    <div className="Sure" onClick = {this.sureOrder}>
                       <span  className="login-btn" >确认</span> 
                    </div>
                </Fragment>
            )
        }
    }
    sureOrder() {
        window.location.href="#/user/page";
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.orderDetail.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        orderForNumber(param) {
            const action = getOrderDetail(param);
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail)