import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import box from 'asset/logo/box.png'

import { Header, 
    Back, 
    Title, 
    NavWrap,
    ContentWrap
} from  './style'

class MyLuckDraw extends React.Component {
    render() {
       return (
            <Fragment>
                <Header>
                    <Back>
                        <div className= "icon-wrap" onClick = { this.hashBakc }>
                            <i className = "iconfont icon">&#xe682;</i>
                        </div>
                    </Back>
                    <Title>我的抽奖单</Title>
                    <NavWrap>
                        <Link to = "/" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe615;</i>
                        </Link>
                    </NavWrap>
                </Header>
                <ContentWrap>
                    <img src={box} alt=""/>
                    <p>您还没有任何抽奖单...</p>
                </ContentWrap>
            </Fragment>
       ) 
    }
    hashBakc() {
        window.history.back();
    }
}

export default MyLuckDraw