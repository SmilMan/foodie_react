import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import { Header, 
    Back, 
    Title, 
    NavWrap,
    ContentWrap
} from  './style'

import noOrder from 'asset/logo/noOrder.png'

import {getOrderUse, delectNoPay} from '../store/createAction'

import Foot from 'common/foot/index'

class OrderToPay extends React.Component {
    render() {
       return (
            <Fragment>
                <Header>
                    <Back>
                        <div className= "icon-wrap" onClick = { this.hashBakc }>
                            <i className = "iconfont icon">&#xe682;</i>
                        </div>
                    </Back>
                    <Title>待付款</Title>
                    <NavWrap>
                        <Link to = "/user/page" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe613;</i>
                        </Link>
                    </NavWrap>
                </Header>
                <ContentWrap>
                    <div >
                        {this.createList()}
                    </div>
                    <Foot nowShop="待付款订单" bgColor = "#fff" loginMsg ="已登入"/>
                </ContentWrap>
                
            </Fragment>
       )
    }
    hashBakc() {
        window.history.back();
    }
    componentDidMount() {
        this.props.getOrder();
    }
    //清空数据。以防数据闪动.
    componentWillUnmount() {
        this.props.dataForNull();
    }
    createList() {
        return( 
            this.props.order.length == 0 ? 
                <div className="noOrder">
                    <img src={noOrder} alt=""/>
                    <p>您还没有相关的订单</p>
                </div>
                :
                this.props.order.map( item => {
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
                                <Link 
                                    to={`/user/OrderPay/${item.shop_name}&${item.totle_price}&${item.order_number}`}
                                    className="class"
                                >
                                    支付
                                </Link>
                                <p 
                                    onClick = {this.props.deleteO.bind(this, item.order_number)}
                                    className="class"
                                    style={{bottom: "-.2rem"}}
                                >
                                    取消
                                </p>
                            </div>
                        </div>                    
                    )
                })
        )
    }
}

const mapSataeToProps = (state) => {
    return {
        order: state.orderToUse.data
    }
} 

const mapDipatchToProps = (dispatch) => {
    return {
        getOrder() {
            const action = getOrderUse("未支付", sessionStorage.getItem("UsName"));
            dispatch(action);
        },
        deleteO(param) {
            console.log(param)
            const action = delectNoPay(param);
            dispatch(action);
        },
        //在组件销毁前清空数据, 以免影响下一次数据的渲染
        dataForNull(){
            dispatch({
                type: "order_data_for_null"
            })
        }
    }
}
export default connect(mapSataeToProps, mapDipatchToProps)(OrderToPay)