import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import axios from 'axios'
import {api} from 'api/config.js'
import happyToUse from 'asset/logo/6.jpg'//无订单logo

import noOrder from 'asset/logo/noOrder.png'//无订单logo
import { Header, 
    Back, 
    Title, 
    NavWrap,
    ContentWrap,
    Loading
} from  './style'

import {getOrderUse} from '../store/createAction'
import Foot from 'common/foot/index'

class OrderToUse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loadFlag: false
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
                    <Title>待使用</Title>
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
                     <Foot nowShop="待使用订单" bgColor = "#fff" loginMsg ="已登入"/>
                </ContentWrap>
                <Loading style = { this.state.loadFlag ? {display: "flex",zIndex: "13"}: {display: "none"}}>
                    <img src={happyToUse} alt=""/>
                </Loading>
            </Fragment>
       )
    }
    hashBakc() {
        window.history.go(-1);
    }
    componentDidMount() {
        this.props.getOrder();
    }
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
                                <p>{item.statu}</p>
                                <p onClick={this.useSure.bind(this, item.order_number)} className="class">确认使用</p>
                            </div>
                        </div>                    
                    )
                })
        )
    }
    useSure(orderNumber) {
        let formData  = new FormData();
        formData.append('statu', '待评价');
        formData.append('statu_msg','评价');
        formData.append('orderNumber',orderNumber);
        axios.defaults.withCredentials=true;
        axios.post(`${api}/updateStatu`, formData , {
            headers:{'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then( res => {
            this.setState(() => ({
                loadFlag: true
            }))
            //当修改订单状态成功时, 再次请求待使用的订单数据，然后更新页面。
            if (res.data.statu === 0) {
                this.props.getOrder("待使用");
            }
            setTimeout(() => {
                this.setState(() => ({
                    loadFlag: false
                }))
            }, 1000)
        })
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
            const action = getOrderUse("待使用", sessionStorage.getItem("UsName"));
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
export default connect(mapSataeToProps, mapDipatchToProps)(OrderToUse)