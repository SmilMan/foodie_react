import React from 'react'
import PropTypes from 'prop-types';

import { Footer, Nav, Line } from './style'

import { Link } from 'react-router-dom'

function Foot(props) {
    return (
        <Footer>
            <div className="now-location">当前位置: > {props.nowShop}</div>
            <div className="login-wrap">
                <div className="login-regist">
                    <Link to ="123" className="login btn">登入</Link>
                    <Link to ="123" className="regist btn">注册</Link>
                </div>
                <div className="city-wrap">
                    <span className="city">城市:</span>
                    <Link to="/city/location" className="city-name">
                         {sessionStorage.getItem('city')?sessionStorage.getItem('city'):"泉州"}
                    ></Link>
                </div>
            </div>
            <Nav>
                <ul className="nav-wrap">
                    <li className="home item">首页</li>
                    <li className="order item">订单</li>
                </ul>
            </Nav>
            <Line className="border-bottom">
                <p>--2019--</p>
            </Line>
        </Footer>
    )
}

Foot.propTypes = {
    nowShop: PropTypes.string
}

Foot.defaultProps = {
  nowShop: '首页'
};


export default Foot 