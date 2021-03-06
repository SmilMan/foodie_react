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

import { getAllOrder } from './store/createAction'

import Foot from 'common/foot/index'

class AllOrder extends React.Component {
    render() {
       return (
            <Fragment>
                <Header>
                    <Back>
                        <div className= "icon-wrap" onClick = { this.hashBakc }>
                            <i className = "iconfont icon">&#xe682;</i>
                        </div>
                    </Back>
                    <Title>全部订单</Title>
                    <NavWrap>
                        <Link to = "/user/page" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe613;</i>
                        </Link>
                    </NavWrap>
                </Header>
                <ContentWrap>
                    <div>
                        {this.createList()}
                    </div>
                    <Foot nowShop="全部订单" bgColor = "#fff" loginMsg ="已登入"/>
                </ContentWrap>
            </Fragment>
       ) 
    }
    hashBakc() {
        window.history.back();
    }
    componentDidMount() {
        this.props.getOrder(sessionStorage.getItem("UsName"));
    }
    createList() {
        return( 
            this.props.allOrder.length == 0  ? 
                <div className="noOrder">
                    <img src={noOrder} alt=""/>
                    <p>您还没有相关的订单</p>
                </div>
                :
                this.props.allOrder.map( item => {
                    return (
                        <div className="wrap" key={item.id}>
                            <div className="title-img">
                                <img src={item.title_img} alt=""/>
                            </div>  
                            <Link to = {"/food/" + item.shop_name + '&'+ item.food_name + ".html"} className="content">
                                <p className="name">{item.shop_name}</p>
                                <p className="name food_name">({item.food_name})</p>
                                <p className="time">下单时间：{item.order_time}</p>
                                <p className="price">总价：¥{item.totle_price}  人均：¥{item.price}</p>
                            </Link>
                            <div className="classfy">
                                <p>{item.statu}</p>
                                <p className="class" onClick={this.toOperation.bind(this,item.statu_msg, item.shop_name, item.totle_price, item.order_number)}>{item.statu_msg}</p>
                            </div>
                        </div>                    
                    )
                })
        )
    }
    toOperation(route, shopName, totlePrice, orderNumber) {
        let routerParams = {
                支付 : "OrderPay",
                使用 : "OrderToUse",
                评价 : "OrderToCom"
            };
        //排除订单已完成， 当已完成时，订单的完成按钮就不能再点；

        if (routerParams[route]) {
            //订单后面的按钮点击后，到相应的页面。
            window.location.href = `#/user/${routerParams[route]}/${shopName}&${totlePrice}&${orderNumber}`;
        }
        
    }
}

const mapStateToProps = (state)=> {
    return {
        allOrder: state.allOrder.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getOrder(param) {
            const action = getAllOrder(param);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AllOrder)