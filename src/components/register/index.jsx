import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import { Header, 
    Back, 
    Title, 
    NavWrap,
    ContentWrap
} from  './style'

import axios from 'axios'
import {api} from 'api/config.js'

class Register extends React.Component {
        constructor(props) {
        super(props)
        this.state = {
            UsName: '',
            decUseColor: false,
            onePas: '',
            twoPas: '',
            decPasColor: false,
            decDiffColor: false
        }
        this.inputOneR = React.createRef();
        this.inputTwoR = React.createRef();
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
                    <Title>用户注册</Title>
                    <NavWrap>
                        <Link to = "/" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe615;</i>
                        </Link>
                    </NavWrap>
                </Header>
                <ContentWrap>
                    <div className="userName">
                        <input  
                            type="text" 
                            placeholder="请输入用户名"
                            value={this.state.UsName}
                            onChange = {this.getUserName.bind(this)}
                            onFocus = {this.focus.bind(this)}
                        />
                    </div>
                    <p 
                        className="dec" 
                        style = {this.state.decUseColor ? {color: "red"} : {color: "#999"}}
                    >以英文字母开头，限4-10个字符.</p>


                    <div className="userName">
                        <input  
                            type="password" 
                            ref = {this.inputOneR}
                            placeholder="请输入密码（密码长度在6-14个字符之间）"
                            onChange = {this.getInputOnePas.bind(this)}
                            onFocus = {this.focus.bind(this)}
                        />
                        <span 
                            onTouchStart={() => {this.inputOneR.current.type = "text";}} 
                            onTouchEnd={() => {this.inputOneR.current.type = "password";}} 
                            className="iconfont icon"
                        >&#xe61b;</span>
                    </div>
                    <div 
                        className="userName iconfont" 
                        style={{borderTop: "1px solid #DDD8CE",marginBottom: ".2rem"}}
                    >
                        <input  
                            type="password" 
                            ref = {this.inputTwoR}
                            placeholder="请输入确认密码"
                            onChange = {this.getInputTwoPas.bind(this)}
                            onFocus = {this.focus.bind(this)}
                        />
                        <span 
                            onTouchStart={() => {this.inputTwoR.current.type = "text";}} 
                            onTouchEnd={() => {this.inputTwoR.current.type = "password";}} 
                            className="iconfont icon"
                        >&#xe61b;</span>
                    </div>
                    <p 
                        className="dec" 
                        style = {this.state.decPasColor ? {color: "red"} : {color: "#999"}}
                    >
                        备注：密码长度8位及以上，需包含（数字/大写字母/小写字母/特殊字符）其中2种及以上组合
                    </p>
                    <p 
                        className="dec" 
                        style = {this.state.decDiffColor ? {color: "red"} : {color: "#999"}}
                    >
                        备注：两次输入要相同
                    </p>
                    <div className="register">
                       <span 
                            onClick={this.userRegister.bind(this)} 
                            className="register-btn">注册</span> 
                    </div>
                </ContentWrap>
            </Fragment>
       )
    }
    hashBakc() {
        window.history.back();
    }
    getUserName(e) {
        const event = e;
        this.setState({
            UsName: event.target.value
        })
    }
    focus() {
        this.setState({
            decUseColor: false
        })
        this.setState(() =>({
            decPasColor: false
        }))
        this.setState(() => ({
            decDiffColor: false
        }))
    }

    /**
     * 获取第一次输入的密码
     */
   getInputOnePas (e) {
        this.setState({
            onePas: e.target.value
        })
    }
    /**
     * 获取输入的第二次密码
     */
    getInputTwoPas(e) {
        this.setState({
            twoPas: e.target.value
        })
    }

    userRegister() {
        //匹配中文或者字母开头 /u utf-8
        let reg1 = /^([A-Za-z]|\p{Unified_Ideograph})/u;
        //不能为纯数字，不能为纯字母，不能为纯特殊符号，综合起来就是必须为数字 字母 特殊符号中最少两种
        let reg2 =/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{6,14}$/;

        const onePas =  this.state.onePas;
        const twoPas = this.state.twoPas;

        let formData = new FormData();

        if (!reg1.test(this.state.UsName) || this.state.UsName.length < 4 || this.state.UsName.length > 10) {
            this.setState({
                decUseColor: true
            })
            return  
        }
        if (onePas !== twoPas) {
            //两次输入不一样
            this.setState(() => ({
                decDiffColor: true
            }))
            return 
        }
        //验证密码的格式
        if (!reg2.test(onePas)) {
            //密码格式不符合
            this.setState(() => ({
                decPasColor: true
            }))
            return 
        }
        formData.append("userPas",onePas);
        formData.append("userName",this.state.UsName);
        axios.post(`${api}/user/register`,formData ,{
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then( (res) => {
            //注册成功后，跳到登入页
            //后端如果没有注册成功的话，会返回一个状态statu = -1 ，前端应该做一层判断
            if (res.data.statu === 0) {
                window.location.href = '#/user/login';
            }else{
                alert(res.data.message);
            }
            console.log(res);
        })
    }
}

export default Register