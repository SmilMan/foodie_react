import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {api} from 'api/config.js'

import { Header, 
    Back, 
    Title, 
    NavWrap,
    ListWrap
} from  './style'
class myInfo extends React.Component{
    render() {
        return (
            <Fragment>
                <Header>
                    <Back>
                        <div className= "icon-wrap" onClick = { this.hashBakc }>
                            <i className = "iconfont icon">&#xe682;</i>
                        </div>
                    </Back>
                    <Title>我的账户</Title>
                    <NavWrap>
                        <Link to = "/" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe615;</i>
                        </Link>
                    </NavWrap>
                </Header>
                <ListWrap>
                    <div className="item-list">
                        <Link to="/user/changeUsName" className="all-order">
                            <p className="content">
                                <i className="iconfont" >&#xe613;</i>
                                <span>{sessionStorage.getItem('UsName')}</span>
                            </p>
                            <p className="right-icon">></p>
                        </Link>
                        <Link to="/user/changeUsPas" className="all-order">
                            <p className="content">
                                <i className="iconfont" >&#xe757;</i>
                                <span>修改登入密码</span>
                            </p>
                            <p className="right-icon">></p>
                        </Link>
                        <Link to="/user/bindPhone" className="all-order">
                            <p className="content">
                                <i className="iconfont" >&#xe618;</i>
                                <span>绑定手机号</span>
                            </p>
                            <p className="right-icon">></p>
                        </Link>
                    </div>
                    <div className="login-out">
                       <span onClick={this.loginOut.bind(this)} className="login-out-btn">退出登入</span> 
                    </div>
                </ListWrap>
            </Fragment>
        )
    }
    hashBakc() {
        window.history.back();
    }
    loginOut() {
        axios.get(`${api}/loginOut`)
            .then( res => {
                //退出后直接到主页
                if (res.data.status === 0) {
                    window.location.href = "/"; //这里会纯在一个问题 手机下面有返回键，若按返回键时，会回到退出的页面（myInfo）
                    // window.open("http://localhost:3000/#/");
                                            // 
                }
            })
    }
}

export default myInfo