

/**
 * 这个头暂且还没有用，保留
 */


import React from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import {api} from 'api/config.js'
import { Header, Back, Title, NavWrap } from  './style'


class ComHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Header>
                <Back>
                    <div className= "icon-wrap" onClick = { this.hashBakc }>
                        <i className = "iconfont icon">&#xe682;</i>
                    </div>
                </Back>
                <Title>{this.props.title}</Title>
                <NavWrap>
                    <div onClick={this.collect.bind(this)} className= "icon-wrap right-nav">
                        {
                                this.props.collect ? 
                                <i className = "iconfont icon">&#xe6b0;</i>:
                                <i className = "iconfont icon">&#xe637;</i>
                        }   
                        <span className = "dec">收藏</span>
                    </div>
                    <div onClick={this.changeHistory} className= "icon-wrap right-nav">
                        <i className = "iconfont icon icon-nav">&#xe613;</i>
                        <span className = "dec">我的</span>
                    </div>
                </NavWrap>
            </Header>
        )
    }
    /**
     * 进入主页（我的）时，应该判断是否有登入
     */
    changeHistory() {
        axios.defaults.withCredentials=true;
        axios.get(`${api}/loginCheck`)
            .then((res) => { 
                if (res.data.status === 0) {

                    //做个缓存，以防用户自动刷新时，myPage数据使用defaultData默认数据
                    sessionStorage.setItem('UsName',res.data.name);  //在登入的时候已经做过了缓存

                    window.history.pushState({},'/user/login');
                    window.history.pushState({},'/user/login');
                    window.location.href = '#/user/page';  
                }else {
                    window.location.href = '#/user/login';
                }
            })
    }
    /**
     * 收藏的按钮
     */
    collect() {
        this.setState(() => ({
            flag: !this.state.flag
        }),()=> {
            let formData = new FormData();
            formData.append("collect", this.state.flag);
            formData.append("foodname", this.props.foodname)
            axios.defaults.withCredentials = true;
            axios.post(`${api}/collect`, formData, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then( res => {
                if (res.data.statu === 0) {
                    alert("收藏成功");
                } else{
                    alert("收藏失败");
                }
            })
        })
        
    }
    hashBakc() {
        window.history.back();
    }
}

export default ComHeader