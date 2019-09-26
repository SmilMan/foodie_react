import React, {Fragment} from 'react' 
import { Link } from 'react-router-dom'
import axios from 'axios'
import {api} from 'api/config.js'
import { Header, 
    Back, 
    Title, 
    NavWrap,
    ContentWrap
} from  './style'

class ChangeUsPas extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            onePas: '',
            twoPas: '',
            decColor: false,
            decDiffColor: false
        }
        this.inputOneR = React.createRef();
        this.inputTwoR = React.createRef();
    }
    render() {
        return(
            <Fragment>
                <Header>
                    <Back>
                        <div className= "icon-wrap" onClick = { this.hashBakc }>
                            <i className = "iconfont icon">&#xe682;</i>
                        </div>
                    </Back>
                    <Title>设置新密码</Title>
                    <NavWrap>
                        <Link to = "/" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe615;</i>
                        </Link>
                    </NavWrap>
                </Header>
                <ContentWrap>
                    <div className="userName">
                        <input  
                            type="password" 
                            ref = {this.inputOneR}
                            placeholder="请输入新密码（密码长度在6-14个字符之间）"
                            value={this.state.UsName}
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
                        style={{borderTop: "1px solid #DDD8CE"}}
                    >
                        <input  
                            type="password" 
                            ref = {this.inputTwoR}
                            placeholder="请输入确认新密码"
                            value={this.state.UsName}
                            onChange = {this.getInputTwoPas.bind(this)}
                            onFocus = {this.focus.bind(this)}
                        />
                        <span 
                            onTouchStart={() => {this.inputTwoR.current.type = "text";}} 
                            onTouchEnd={() => {this.inputTwoR.current.type = "password";}} 
                            className="iconfont icon"
                        >&#xe61b;</span>
                    </div>
                    <div className="sure-update">
                       <span onClick={this.postUserPas.bind(this)} className="login-out-btn">确定提交</span> 
                    </div>
                    <p 
                        className="dec" 
                        style = {this.state.decColor ? {color: "red"} : {color: "#999"}}
                    >
                        备注：密码长度8位及以上，需包含（数字/大写字母/小写字母/特殊字符）其中2种及以上组合
                    </p>
                    <p 
                        className="dec" 
                        style = {this.state.decDiffColor ? {color: "red"} : {color: "#999"}}
                    >
                        备注：两次输入要相同
                    </p>
                </ContentWrap>
            </Fragment>
        )
    }
    hashBakc() {
        window.history.back();
    }
    /**
     * 当输入不符合规范的时候，再次输入的时候将提示的颜色改回来
     */
    focus() {
        this.setState(() =>({
            decColor: false
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
    /**
     * 对密码进行验证，发送请求，修改密码。
     * 对密码进行修改，根据用户名，用户名可以从服务端的req.session.userName中取到。
     */
    postUserPas() {
        const onePas =  this.state.onePas;
        const twoPas = this.state.twoPas;
        let formData = new FormData();
        //不能为纯数字，不能为纯字母，不能为纯特殊符号，综合起来就是必须为数字 字母 特殊符号中最少两种
        let reg=/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{6,14}$/;
        if (onePas !== twoPas) {
            //两次输入不一样
            this.setState(() => ({
                decDiffColor: true
            }))
        }else{
            //验证密码的格式
            if (reg.test(onePas)) {

                formData.append("newPas",onePas);
            
                axios.post(`${api}/update/userPas`,formData ,{
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then( (res) => {
                    //修改成功后，跳到登入页，重新登入
                    //后端如果没有修改成功的话，会返回一个状态statu = -1 ，前端应该做一层判断
                    console.log(res);
                    if (res.data.statu === 0) {
                        window.location.href = '#/user/login';
                    }else{
                        alert('修改失败');
                    }
                    })
            } else{
                //密码格式不符合
                this.setState(() => ({
                    decColor: true
                }))
            }
        }
        console.log(onePas);
        console.log(twoPas);
    }
}


export default ChangeUsPas