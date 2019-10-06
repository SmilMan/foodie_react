import React from 'react'
import PropTypes from 'prop-types';

import { Footer, Nav, Line } from './style'

import { Link } from 'react-router-dom'

import {api} from 'api/config.js'
import axios from 'axios'

const changeHistory = () => {
    axios.defaults.withCredentials=true;
    axios.get(`${api}/loginCheck`)
        .then((res) => {
            console.log(res)
            if (res.data.status === 0) {

                //做个缓存，以防用户自动刷新时，myPage数据使用defaultData默认数据
                // sessionStorage.setItem('UsName',res.data.name); 在登入的时候已经做过缓存
                
                window.history.pushState({},'/user/login');
                window.history.pushState({},'/user/login');
                window.location.href = '#/user/page';  
            }else {
               window.location.href = '#/user/login';
            }
        })
    // window.location = '#/user/login';
}

function Foot(props) {
    return (
        <Footer style={{background: props.bgColor}}>
            <div className="now-location">当前位置: > {props.nowShop}</div>
            <div className="login-wrap">
                <div className="login-regist">
                    <p onClick={changeHistory} className="login btn">{props.loginMsg}</p>
                    <Link to ="/user/register" className="regist btn">注册</Link>
                </div>
                <div className="city-wrap">
                    <span className="city">城市:</span>
                    <Link to="/city/location" className="city-name">
                         {sessionStorage.getItem('city')?sessionStorage.getItem('city'):"泉州"}
                    </Link>
                </div>
            </div>
            <Nav>
                <ul className="nav-wrap">
                    <li className="home item">
                        <Link to = '/'>首页</Link>
                    </li>
                    <li className="order item">
                        <Link to = '/user/allOrder'>订单</Link>
                    </li>
                </ul>
            </Nav>
            <Line className="border-bottom">
                <p>--2019--</p>
            </Line>
        </Footer>
    )
}

Foot.propTypes = {
    nowShop: PropTypes.string,
    bgColor: PropTypes.string,
    loginMsg: PropTypes.string
}

Foot.defaultProps = {
  nowShop: '首页',
  bgColor: "",
  loginMsg: "登入"
};


export default Foot 