import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import phoneGif from 'asset/logo/bindPhone.gif'
import { Header, 
    Back, 
    Title, 
    NavWrap,
    ContentWrap
} from  './style'

let hashBakc = () => {
    window.history.back();
}
let bindPhone = () => {
    return (
        <Fragment>
                <Header>
                    <Back>
                        <div className= "icon-wrap" onClick = { hashBakc }>
                            <i className = "iconfont icon">&#xe682;</i>
                        </div>
                    </Back>
                    <Title>绑定手机号</Title>
                    <NavWrap>
                        <Link to = "/" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe615;</i>
                        </Link>
                    </NavWrap>
                </Header>
                <ContentWrap>
                    <img src={phoneGif} alt=""/>
                    <p>电话绑定短信验证，移动电信不允许啊！</p>
                    <p>太南啦</p>
                </ContentWrap>
        </Fragment>
    )
}

export default bindPhone