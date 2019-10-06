import React, { Fragment } from "react"
import { connect } from "react-redux"
import { Link, withRouter } from 'react-router-dom'

import axios from 'axios'
import {api} from 'api/config.js'

import ComHeader from "common/comHeader/index"

import {
    ContWrap,
    FoodInfoTitle,
    ShopInfo,
    BuyDec,
    Recommend,
    ShowImgBar
} from "./style"
import logoImg from  'asset/logo/headerLogo.png'
import Foot from 'common/foot/index'

import { getCommon, getFoodData } from "./store/createAction"



class Food extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            showBar: false
        }
    }
    render() {
        return (
            <Fragment>
                <ComHeader title = "美食详情"/>
                <ContWrap>
                    <header className="logo-wrap">
                        <img className="header-logo" src = {logoImg} alt =" "/>
                    </header>
                    {this.props.foodInfo ? this.creactElement(): ""} 
                </ContWrap>
                <ShowImgBar onClick={this.hiddenBar.bind(this)} style={this.state.showBar ? {display: "flex",alignItems: "center"} : {display: "none"}}>
                    <img src={sessionStorage.getItem("imgBar")} alt=""/>
                </ShowImgBar>
            </Fragment>
        )
    }
    showBar() {
        this.setState({
            showBar: true
        })
    }
    hiddenBar(){
        this.setState({
            showBar: false
        })
    }
    creactElement() {
        if (this.props.foodInfo.food && this.props.foodInfo.food.length > 0) {
            let {
             shop_name,
             detail_location,
             food
            } = this.props.foodInfo
            sessionStorage.setItem("imgBar",food[0].title_img)
            return (
                <Fragment>
                    <FoodInfoTitle>
                        <div className="img-wrap" onClick = {this.showBar.bind(this)}>
                            <img src ={food[0].title_img} alt="xxx"/>
                            <div className="title-info">
                                <h3>{shop_name}</h3>
                                <p>{food[0].foodname}</p>
                            </div>
                        </div>
                        <div className="price-info">
                            <div className="wrapper">
                                <div className="price-wrap">
                                    <span className="price">{food[0].price}</span>
                                    <span>元</span>
                                    <span className="dec">超低实惠价</span>
                                </div>
                                <div onClick={this.goOrderDetail.bind(this,shop_name,food[0].foodname, food[0].price, food[0].title_img)}  className="order">
                                    <span>立即抢购</span>
                                </div>
                            </div>
                            <div className="info">
                                <p>支持随时退款</p>
                                <p>支持过期自动退款</p>
                                <p>已售：<span>{food[0].sold}</span></p>
                            </div>
                        </div>
                    </FoodInfoTitle>
                    <ShopInfo>
                        <div className="info-title">
                            商家信息
                        </div>
                        <div className="info-cont">
                            <div className="location-info">
                                <h3 className="location-icon">{shop_name}</h3>
                                <p className="location">{detail_location}</p>
                            </div>
                            <div className="icon">
                                <a className="icon-link" href ="tel:17759501710">
                                    <i className="iconfont">&#xe60d;</i>
                                </a>
                            </div>
                        </div>
                    </ShopInfo>
                    <BuyDec>
                        <div className="title">
                            购买须知
                        </div>
                        <div>
                            <h5 className="use">使用时间</h5>
                            <p className="use-time">10:30-21:30</p>
                        </div>
                        <div>
                            <h5 className="use">使用规则</h5>
                            <ul className="role">
                                <li>无需预约，消费高峰期可能需要等位</li>
                                <li>方案不含餐巾纸，需到店另付2元/份</li>
                                <li>套餐提供2位调料费，超过部分需补齐6元/位。</li>
                                <li>团购用户不可同时享受商家其他优惠</li>
                                <li>为了给您带来更好的消费体验，请您“先验证后消费”，给您带来的不变，敬请谅解；</li>
                                <li>每张美团券建议2人使用</li>
                                <li>店内无包间</li>
                                <li>仅限堂食，不提供餐前外带，餐毕未吃完可打包，打包费详情请咨询商家</li>
                            </ul>
                        </div>
                    </BuyDec>
                    <Recommend>
                        <div className="recom-title">
                            <p className="title">评价</p>
                            <p className="num">评价星级：<span>{food[0].num}</span></p>
                        </div>
                        {this.createCommonList()}
                        <div className="more-recom">
                            <Link to={"/comment/" + food[0].foodname}>查看更多评论</Link>
                        </div>
                    </Recommend>
                    <Foot nowShop ={shop_name}/>
                </Fragment>
            )
        }
    }

    createCommonList() {
        if (this.props.foodComment && this.props.foodComment.length > 0) {
            const comment = this.props.foodComment.slice(0,3);
            return (
                comment.map((ele, index) => {
                    return <div className="content" key = {index}>
                        <div className="wrap">
                            <div className="img">
                                <img src={ele.photo} alt=""/>
                            </div>
                            <div className="user-info">
                                <p>{ele.use_name}</p>
                                <p>
                                    星级: <span>{ele.star_num}</span><span>{ele.time}</span>
                                </p>
                            </div>
                        </div>    
                        <div className="cont">{ele.content}</div>
                    </div>
                })
            )
        }
    }
    componentWillMount() {
        let [shopname, foodname] = this.props.match.params.foodname.split(".")[0].split("&");
        this.props.getFoodInfo(shopname, foodname); //获取foodPage的数据， 利用shopDetail中的数据来解析;
        this.props.getCommonContent(foodname); //通过食品名，获取评论的内容
        
    }

    componentWillUnmount() {
        this.props.dataForNull()
    }

    //检验是否已经登入，若未登入就到登入页先登入，若登入则直接到订单详情页
    /**
     * 
     * @param {*} shop_name  商店的名称
     * @param {*} foodname 食物的名称
     * @param {*} price 食物的价格
     */
    goOrderDetail(shop_name, foodname, price,img) {
        const imgUrl = img.replace("//","**").replace('/deal/','.deal.');
        const url =  `#/user/OrderSure/${shop_name}&${foodname}&${price}&${imgUrl}`;
        axios.defaults.withCredentials=true;
        axios.get(`${api}/loginCheck`)
            .then((res) => {
                if (res.data.status === 0) {

                    //做个缓存，以防用户自动刷新时，myPage数据使用defaultData默认数据
                    // sessionStorage.setItem('UsName',res.data.name);  在登入的时候已经做过了缓存,这里没有必要重新做缓存。

                    window.history.pushState({},'/user/login');
                    window.location.href = url;  
                }else {
                    window.location.href = '#/user/login';
                }
            })
    }
}
 
const mapStateToProps = (state) => {
    return {
        foodInfo: state.foodDetail.foodData,
        foodComment: state.foodDetail.comment
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getFoodInfo(shopName, foodName) {
            const action = getFoodData(shopName, foodName);
            dispatch(action);
        },
        getCommonContent(foodName){
            dispatch(getCommon(foodName))
        },
        //退出前清除数据
        dataForNull() {
            dispatch({
                type: "data_for_null"
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)( withRouter(Food))