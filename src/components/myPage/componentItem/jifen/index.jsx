import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import jifen from 'asset/logo/jifen.gif'

import { Header, 
    Back, 
    Title, 
    NavWrap,
    ContentWrap
} from  './style'

class MyJifen extends React.Component {
    render() {
       return (
            <Fragment>
                <Header>
                    <Back>
                        <div className= "icon-wrap" onClick = { this.hashBakc }>
                            <i className = "iconfont icon">&#xe682;</i>
                        </div>
                    </Back>
                    <Title>积分换礼品</Title>
                    <NavWrap>
                        <Link to = "/" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe615;</i>
                        </Link>
                    </NavWrap>
                </Header>
                <ContentWrap>
                    <img src={jifen} alt=""/>
                    <p>您的积分目前为空</p>
                </ContentWrap>
            </Fragment>
       ) 
    }
    hashBakc() {
        window.history.back();
    }
}

export default MyJifen