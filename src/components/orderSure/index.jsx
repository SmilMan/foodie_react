import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

import axios from 'axios'
import {api} from 'api/config.js'

import { Header, 
    Back, 
    Title, 
    NavWrap,
    ContentWrap
} from  './style'

class OrderSure extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputV: 1,
            // 路由获取的参数
            price: this.props.match.params.order.split('&')[2],
            totlePrice: this.props.match.params.order.split('&')[2],
            location: "",//配送地址
            time: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`,//下单时间
            flag: false,  //控制文本框的输入（不允许输入为空）
            Number: Math.ceil((Math.random() + 1) * 1000000000000),//订单编号
        }
        this.local = React.createRef()
        this.orderNumber = React.createRef()//获取订单编号
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
                    <Title>提交订单</Title>
                    <NavWrap>
                        <Link to = "/" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe615;</i>
                        </Link>
                    </NavWrap>
                </Header>
                <ContentWrap>
                    <h5>订单明细</h5>
                    <div className="order-wrap">
                        <div className="item-list">
                            店名 :
                            <span className="item">{this.props.match.params.order.split('&')[0]}</span>
                        </div>
                        <div className="item-list">
                            食品 :
                            <span className="item" style={{width: "5rem",whiteSpace: "nowrap",overflow: "hidden", textOverflow: "ellipsis",textAlign: "right"}}>{this.props.match.params.order.split('&')[1]}</span>
                        </div>
                        <div className="item-list">
                            单价 :
                            <span className="item">￥{this.state.price}</span>
                        </div>
                        <div className="item-list">
                            数量 :
                            <span className="item chose">
                                <button onClick={this.reduce.bind(this)}>-</button>
                                <input type="text" value= {this.state.inputV} readOnly/>
                                <button onClick={this.add.bind(this)}>+</button>
                            </span>
                        </div>
                        <div className="item-list">
                            总价 : 
                            <span className="item totle-price">￥{this.state.totlePrice}</span>
                        </div>
                        <div className="item-list" >
                            抵用券 : 
                            <span className="item" >0 张</span>
                        </div>
                    </div>

                    <h5>配送信息</h5>
                    <div className="order-wrap">
                       <div className="item-list">
                           送餐时间 :
                            <span className="item">立即配送</span>
                       </div>
                        <div className="item-list">
                            配送地址(详细地址) :
                        </div>
                        <div 
                            className="item-list"
                            className={this.state.flag ? "textarea-style" : "textarea-no-style"} 
                        >
                            <textarea 
                                ref={this.local}  
                                onChange={this.getLocation.bind(this)} 
                                onFocus={this.changeFlag.bind(this)}
                                type="text" placeholder="请输入您的地址" 
                                style={{textIndent:".2rem",fontSize:".3rem",height:".9rem",width:"100%",outline: "none",border:"none"}}
                                />
                        </div>
                        <div className="item-list" style={{borderTop: "none"}}>
                            下单时间 :
                            <span className="item">
                                {this.state.time}
                            </span>
                        </div>
                        <div className="item-list">
                            订单编号 : 
                            <span ref={this.orderNumber} className="item">{this.state.Number}</span>
                        </div>
                        <div className="item-list" style={{marginTop:"1rem"}}>
                            还需支付 : 
                            <span className="item totle-price" >￥{this.state.totlePrice}</span>
                        </div>
                    </div>

                    <div className="Sure" onClick = {this.submitOrder.bind(this)}>
                       <span  className="login-btn" >提交订单</span> 
                    </div>
                </ContentWrap>
            </Fragment>
       )
    }
    hashBakc() {
        window.history.back();
    }
    /**
     *减少
     */
    reduce() {
        if (this.state.inputV > 1) {
            this.setState((prevState) => ({
                inputV: prevState.inputV - 1
            })) 
            this.setState((prevState) => ({
                totlePrice: prevState.price * prevState.inputV
            }))
        }

    }
    add() {
        this.setState((prevState) => ({
            inputV: prevState.inputV + 1
        }))
        this.setState((prevState) => ({
            totlePrice: prevState.price * prevState.inputV
        }))
    }
    //  保存详细地址
    getLocation() {
        this.setState(() => ({
            location: this.local.current.value
        }))
    }
    /**
     * 聚焦时将样式恢复
     */
    changeFlag() {
        this.setState(() => ({
            flag: false
        }))
    }

    submitOrder() {
        if (this.state.location){
            let formData  = new FormData();
            let orderNumber = this.orderNumber.current.innerText; //订单编号
            let [shopName, foodName, price, imgUrl] = this.props.match.params.order.split('&');
            imgUrl = imgUrl.replace('**',"//").replace(".deal.","/deal/");

            formData.append('shopName', shopName);
            formData.append('foodName', foodName);
            formData.append('price', price);
            formData.append('totlePrice', this.state.totlePrice)
            formData.append('imgUrl', imgUrl);
            formData.append('userName', sessionStorage.getItem('UsName'));
            formData.append('statu', '未支付');
            formData.append('statu_msg','支付')
            formData.append('orderNumber', orderNumber);
            formData.append('time',this.state.time);
            formData.append('location', this.state.location)

            axios.defaults.withCredentials=true;
            axios.post(`${api}/pushOrder`, formData , {
                headers:{'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then((res) => {
                if (res.data.statu === 0) {
                    window.location.href = `#/user/OrderPay/${this.props.match.params.order.split('&')[0]}&${this.state.totlePrice}&${orderNumber}`;
                }else{
                    alert("下单失败");
                }
            })
        }else{
            this.setState(() => ({
                flag: true
            }))
        }

    }
}

export default OrderSure