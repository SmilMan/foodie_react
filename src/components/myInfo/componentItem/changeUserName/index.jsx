import React, { Fragment } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import {api} from 'api/config.js'
import { Header, 
    Back, 
    Title, 
    NavWrap,
    ContentWrap
} from  './style'

axios.defaults.withCredentials = true;

class ChangeUsN extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            UsName: sessionStorage.getItem("UsName"),
            decColor: false
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
                    <Title>修改用户名</Title>
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
                            placeholder="请输入新的用户名"
                            value={this.state.UsName}
                            onChange = {this.changeInputV.bind(this)}
                            onFocus = {this.focus.bind(this)}
                        />
                    </div>
                    <p className="dec" style = {this.state.decColor ? {color: "red"} : {color: "#999"}}>以英文字母开头，限4-10个字符.</p>
                    <div className="login-out">
                       <span onClick={this.changeUsName.bind(this)} className="login-out-btn">修改</span> 
                    </div>
                </ContentWrap>
            </Fragment>
        )
    }
    hashBakc() {
        window.history.back();
    }
    changeInputV(e) {
        const event = e;
        this.setState({
            UsName: event.target.value
        })
    }
    focus() {
        this.setState({
            decColor: false
        })
    }
    changeUsName() {
        //匹配中文或者字母开头 /u utf-8
        let reg = /^([A-Za-z]|\p{Unified_Ideograph})/u
        let formData = new FormData();
        if (reg.test(this.state.UsName) && this.state.UsName.length >= 4 && this.state.UsName.length <= 10 && sessionStorage.getItem("UsName") !==this.state.UsName) {
            
            formData.append("userName",sessionStorage.getItem("UsName"));
            formData.append("newName",this.state.UsName);
            
            axios.post(`${api}/update/userName`,formData ,{
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then( (res) => {
                //修改成功后，跳到登入页，重新登入
                if (res.data.statu === 0) {
                    window.location.href = '#/user/login';
                }else{
                    alert('修改失败');
                }
            })
        }else{
            this.setState({
                decColor: true
            })
        }
    }
}

export default ChangeUsN