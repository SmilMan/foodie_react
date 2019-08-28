import React, { Fragment } from 'react'
import Icon from './iconf'
import Header from '../common/header'
import Recommend from './recomend'
import Logo from '../../asset/logo/headerLogo.png'

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
                <Header ref = {this.header}/>
                <Nav ref = {this.nav}>
                    全部美食 》
                </Nav>
                <ContentWrap ref = {this.ContentWrap}>
                    <HeaderLogo>
                        <img src = {Logo} alt = "headerL"/>
                    </HeaderLogo>
                    <Icon />
                    <Recommend />
                </ContentWrap>
            </Fragment>
        )
    }
    /**
     * 处理滚动触发的样式转化；
     */
    componentDidMount() {
        let dom = document.querySelector('Header .logoImg');
        this.ContentWrap.current.addEventListener('scroll', (e) => {
            e.target.scrollTop >= 234 ? this.nav.current.style.display = "block"
                                        : this.nav.current.style.display = "none";
            if (e.target.scrollTop >= 60) {
                this.header.current.style.background = "rgba(250,250,250,1)";
                this.header.current.style.color = "#06c1ae";
                dom.classList = "logoStyleHeight";
            }else {
                this.header.current.style.background = 'rgba(250, 250, 250, 0)';
                this.header.current.style.color = "#fff";
                dom.classList = "logoStyleNoHeight";
            }
            
        })
    }
}

export default Home
