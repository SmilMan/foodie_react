import React, { Fragment } from 'react'
import { connect } from "react-redux"
import Icon from './iconf'
import Header from 'common/homeHeader'
import Recommend from './recomend'
import Logo from 'asset/logo/headerLogo.png'
import Foot from 'common/foot/index'

import { Nav, ContentWrap, HeaderLogo } from './style'
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.ContentWrap = React.createRef();
        this.header = React.createRef();
        this.nav = React.createRef();
    }
    render() {
        return (
            <Fragment>
                <Header  ref = {this.header}/>
                <Nav ref = {this.nav}>
                    {this.props.navText} >
                </Nav>
                <ContentWrap ref = {this.ContentWrap}>
                    <HeaderLogo>
                        <img src = {Logo} alt = " "/>
                    </HeaderLogo>
                    <Icon />
                    <Recommend />
                    <Foot/>
                </ContentWrap>
            </Fragment>
        )
    }
    /**
     * 处理滚动触发的样式转化；
     */
    componentDidMount() {
        this.ContentWrap.current.scrollTop = Number(sessionStorage.getItem("scroll"));
        let dom = document.querySelector('Header .logoImg');
        this.ContentWrap.current.addEventListener('scroll', (e) => {
            sessionStorage.setItem("scroll",e.target.scrollTop);
            if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
                e.target.scrollTop >= 233 ? this.nav.current.style.display = "block"
                                          : this.nav.current.style.display = "none";
            } else{
                e.target.scrollTop >= 480 ? this.nav.current.style.display = "block"
                                          : this.nav.current.style.display = "none";
            }
            if (e.target.scrollTop >= 60) {
                this.header.current.style.background = "rgba(250,250,250,1)";
                dom.classList = "logoStyleHeight";
            }else {
                this.header.current.style.background = 'rgba(250, 250, 250, 0)';
                dom.classList = "logoStyleNoHeight";
            }
            
        })
    }
}

const mapStateToProps = (state) => {
    return {
        navText: state.allShop.navText
    }
}

export default connect(mapStateToProps, null)(Home)
