import React,{Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'

import axios from 'axios'
import {api} from 'api/config.js'

import pay1 from 'asset/logo/pay1.png'
import pay2 from 'asset/logo/pay2.png'
import payLoad from 'asset/logo/payLoad.gif'

import { Header, 
    Back, 
    Title,
    ContentWrap,
    Loading
} from  './style'

class OrderPay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "正在付款....",
            flag: false
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
                    <Title>订单支付</Title>
                </Header>
                <ContentWrap>
                    <div className="title">
                        <p className="name">未支付需手动取消</p>
                        <h5>￥<span>{this.props.match.params.pay.split('&')[1]}</span></h5>
                        <p className="name">{this.props.match.params.pay.split('&')[0]}</p>
                    </div>
                    <div className="pay-method">
                        <img src={pay1} alt=""/>
                        <div className="pay-name">支付宝支付</div> 
                        <input readOnly type="radio" name="pay" id="" checked/>
                    </div>
                    <div className="pay-method" style={{borderTop: "1px solid #eee"}}>
                        <img src={pay2} alt=""/>
                        <div className="pay-name">微信支付</div> 
                        <input readOnly type="radio" name="pay" id=""/>
                    </div>

                    <p className="dec">暂未提供其他的付款方式</p>

                    <div className="Sure" onClick = {this.submitOrder.bind(this)}>
                       <span  className="login-btn" >确认支付</span> 
                    </div>
                </ContentWrap>

                <Loading style = {this.state.flag ? {display: "inline-block"}: {display: "none"}}>
                    <img src={payLoad} alt=""/>
                    <p>{this.state.msg}</p>
                </Loading>
            </Fragment>
       )
    }
    hashBakc() {
        window.history.back();
    }

    submitOrder() {

        this.setState({
            flag: true
        })

        let formData  = new FormData();
        formData.append('statu', '待使用');
        formData.append('statu_msg','使用');
        formData.append('orderNumber',this.props.match.params.pay.split("&")[2])
        axios.defaults.withCredentials=true;
        axios.post(`${api}/updateStatu`, formData , {
            headers:{'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then((res) => {
            this.setState({
                msg: "付款成功,稍等"
            })
            setTimeout(() => {
                this.setState({
                    flag: false
                })
                window.location.href = `#/user/OrderDetail/${this.props.match.params.pay.split("&")[2]}`;
            },2000)
        })
    }
}

export default OrderPay