import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import ha from 'asset/logo/ha.gif'

import { Header, 
    Back, 
    Title, 
    NavWrap,
    ContentWrap
} from  './style'

class Diyongjuan extends React.Component {
    render() {
       return (
            <Fragment>
                <Header>
                    <Back>
                        <div className= "icon-wrap" onClick = { this.hashBakc }>
                            <i className = "iconfont icon">&#xe682;</i>
                        </div>
                    </Back>
                    <Title>抵用券</Title>
                    <NavWrap>
                        <Link to = "/" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe615;</i>
                        </Link>
                    </NavWrap>
                </Header>
                <ContentWrap>
                    <img src={ha} alt=""/>
                    <p>非常抱歉。您的抵用券如海草一般飘摇。</p>
                </ContentWrap>
            </Fragment>
       ) 
    }
    hashBakc() {
        window.history.back();
    }
}

export default Diyongjuan