import React,{ Fragment } from 'react'
import { connect } from 'react-redux'
import ComHeader from 'common/comHeader'
import logoImg from  'asset/logo/headerLogo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {api} from 'api/config.js'
// import { getFoodData } from '@/components/foodPage/store/createAction'

import { getShopDetail } from "./store/createAction"

import {
    Header, 
    Back, 
    Title, 
    NavWrap,
    ContWrap, 
    Content, 
    ShopInfo,
    FoodInfo, 
    FoodRecom, 
    ShopDec
} from './style'
import Foot from 'common/foot/index'


class ShopDetail extends React.Component{
    render() {
        return (
            <Fragment>
                <Header>
                    <Back>
                        <div className= "icon-wrap" onClick = { this.hashBakc }>
                            <i className = "iconfont icon">&#xe682;</i>
                        </div>
                    </Back>
                    <Title>商家详情</Title>
                    <NavWrap>
                        <div onClick={this.changeHistory} className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe613;</i>
                        </div>
                    </NavWrap>
                </Header>
                <ContWrap>
                    <header className="logo-wrap">
                        <img className="header-logo" src = {logoImg} alt ="title img"/>
                    </header>
                    { this.createTemplete() }
                </ContWrap>
            </Fragment>
        )
    }
    hashBakc() {
        window.history.back();
    }
    changeHistory() {
        axios.defaults.withCredentials=true;
        axios.get(`${api}/loginCheck`)
            .then((res) => {
                if (res.data.status === 0) {

                    //做个缓存，以防用户自动刷新时，myPage数据使用defaultData默认数据
                    // sessionStorage.setItem('UsName',res.data.name);  在登入的时候已经做过了缓存

                    window.history.pushState({},'/user/login');
                    window.history.pushState({},'/user/login');
                    window.location.href = '#/user/page';  
                }else {
                    window.location.href = '#/user/login';
                }
            })
    }
    componentDidMount() {
        const param = this.props.match.params.shopname.split(".")[0];
        this.props.initShopDetail(param);
    }

    componentWillUnmount() {
        this.props.shopDetail[0] = {
            detail_location: "",
            shop_name: "",
            img_url: "",
            food_recom: "",
            food: []
        }
    }

    createTemplete() {
        if (this.props.shopDetail[0]) {
            let {
                    detail_location,
                    shop_name,
                    img_url,
                    food_recom,
                    food,
                } = this.props.shopDetail[0]
        return (
            <Fragment>
            <Content>
                <div className="gallery-wrap">
                    <img className = "gallery-title" src = {img_url} alt = " "/>
                    <Link to={"/imgBar/" + shop_name +".html"} className= "iconfont icon">&#xe631;</Link>
                </div>
                <ShopInfo>
                    <div className="shop-name">
                        <div className="name">{shop_name}</div>
                        <div className="star-price">
                            <div className="star">
                                <span>
                                    <i className="iconfont icon">&#xe6b0;</i>
                                    <i className="iconfont icon">&#xe6b0;</i>
                                    <i className="iconfont icon">&#xe6b0;</i>
                                    <i className="iconfont icon">&#xe6b0;</i>
                                    <i className="iconfont icon">&#xe637;</i>
                                    <em className="num">{sessionStorage.getItem("star")}</em>
                                </span>
                            </div>
                            <div className="price">人均：￥{sessionStorage.getItem("price")}</div>
                        </div>
                    </div>
                    <div className="shop-location">
                        <div className="location-info">
                            <Link to = {`/map/location/${shop_name}&${detail_location}`} className="iconfont location-icon">&#xe7e0;</Link>
                            <span className="location">{detail_location}</span>
                        </div>
                        <div className="icon">
                            <a className="icon-link" href ="tel:177-5950-1716">
                                <i className="iconfont">&#xe60d;</i>
                            </a>
                        </div>
                    </div>
                </ShopInfo>
                <FoodInfo>
                    <div className="title">店里特色</div>
                    { food.map( (ele, index) => {
                        return ele.foodname === "无" ? <p key ={index}  className="no-food">请直接到店面就餐</p> :
                            <Link key = {index} to = {"/food/" + shop_name + '&'+ele.foodname + ".html"} className="food-link">
                                <div className="food-content">
                                    <div className="img-wrap">
                                        <img src={ele.title_img} alt=" "/>
                                    </div>
                                    <div className="cont-info">
                                        <p className="info-title">{ele.foodname}</p>
                                        <div className="price-info">
                                            <p className="price">￥{ele.price}元</p>
                                            <p className="sold">已经售：{ele.sold}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                    })}
                </FoodInfo>
                <FoodRecom>
                    <div className="recom-title">
                        推荐菜
                    </div>
                    <div className="recom-cont">
                        { food_recom.split(";").map( (ele, index) => {
                            return ele === " " ? <span key = {index}>该店暂时无推荐菜</span> : <span key = {index}>{ele}</span>
                        })}
                    </div>
                </FoodRecom>

                <ShopDec>
                    <div className="title">
                        商家概述
                    </div>
                    <div className="content">
                        <div className="wifi flex">
                            <p className="pr">WIFI</p>
                            <p>支持wifi</p>
                        </div>
                        <div className="time flex">
                            <p className="pr">营业时间</p>
                            <p>周一至周五 09:30 - 01:00</p>
                        </div>
                    </div>
                </ShopDec>
            </Content>
            <Foot nowShop ={shop_name}/>
            </Fragment>
          )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        shopDetail: state.shopDetail.data
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        /**
         * 
         * @param {*} shopName  商家的名称
         * @param {*} foodName  商家内具体的食物名称
         */        
        // 当在shopDetail页面里点击相应的食物时， 就派发一个action去初始化foodPage的数据,
        //这个action 经过react-thunk 处理后，发送请求，然后数据在foodPage store 经过reducer判断后初始化。
        // initFoodInfo(shopName, foodName) {
        //     const action = getFoodData(shopName, foodName);
        //     dispatch(action);
        // },

        /**
         * 
         * @param {*} param 商家的名字。shopName
         */
        initShopDetail(param) {
            const action = getShopDetail(param);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopDetail);