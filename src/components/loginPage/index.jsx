import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {api} from 'api/config.js'
import { Header, 
    Back, 
    Title, 
    NavWrap,
    InputWrap,
    LoginBtn,
    AlertMessage
} from  './style'


class LoginPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            flag : false
        }
        this.userName = React.createRef();
        this.userPas = React.createRef();
    }
    render() {
        return(
            <Fragment>
                <Header>
                    <Title>foodie</Title>
                    <NavWrap>
                        <Link to = "/" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe615;</i>
                        </Link>
                    </NavWrap>
                </Header>
                <InputWrap>
                    <div className="title">
                        foodie 账号登入
                    </div>
                    <div className="content">
                        <p>
                            <input type="text" placeholder="账户名" ref={this.userName}/>
                        </p>
                        <p>
                            <input type="password" placeholder="请输入您的密码" ref={this.userPas}/>
                        </p>
                    </div>
                </InputWrap>
                <LoginBtn>
                    <div className="login">
                       <span onClick={this.userLogin.bind(this)} className="login-btn">登入</span> 
                    </div>
                    <div className="dec">
                        <p>立即注册</p>
                        <p>忘记密码</p>
                    </div>
                </LoginBtn>
                <AlertMessage onClick={this.hidden.bind(this)} style={ this.state.flag ? {display: "flex"}: {display: "none"}}>
                    <div className="message">
                        <p>用户名和密码不匹配</p>
                        <p>请重新登入!!!</p>
                    </div>
                </AlertMessage>
            </Fragment>

        )
    }

    userLogin() {
        const userName = this.userName.current.value;
        const userPas = this.userPas.current.value;
        var formData = new FormData();

        formData.append("userName", userName);
        formData.append("userPas", userPas);
        axios.defaults.withCredentials=true;
        axios.post(`${api}/login`, formData,{
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then((res) => {

            //登入过将用户名缓存。
            sessionStorage.setItem("UsName",res.data.result.userName);

            if (res.data.result.statu === 0) {
               window.location.href = '#/user/page';  
            }else {
                //登入失败时，显示提示信息。
                this.setState(() => ({
                    flag: true
                }))
            }
        })
    }
    hidden() {
        this.setState(() => ({
            flag: false
        }))
        this.userName.current.value = "";
        this.userPas.current.value = "";
    }
}

export default LoginPage