import React from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import {api} from 'api/config.js'
import { Header, Back, Title, NavWrap } from  './style'


class ComHeader extends React.Component {
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
                    <Link to = "oooo" className= "icon-wrap right-nav">
                        <i className = "iconfont icon">&#xe637;</i>
                        <span className = "dec">收藏</span>
                    </Link>
                    <div onClick={this.changeHistory} className= "icon-wrap right-nav">
                        <i className = "iconfont icon icon-nav">&#xe613;</i>
                        <span className = "dec">我的</span>
                    </div>
                </NavWrap>
            </Header>
        )
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

    hashBakc() {
        window.history.back();
    }
}

export default ComHeader