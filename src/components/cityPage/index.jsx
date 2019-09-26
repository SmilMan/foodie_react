import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


import { Header, 
    Back, 
    Title, 
    NavWrap,
    Content,
    CityContent
} from  './style'

import { getCity } from './store/createAction'



class CityPage extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.content = React.createRef();
    // }
    render() {
        return (
            <Fragment>
                <Header>
                    <Back>
                        <div className= "icon-wrap" onClick = { this.hashBakc }>
                            <i className = "iconfont icon">&#xe682;</i>
                        </div>
                    </Back>
                    <Title>选择城市</Title>
                    <NavWrap>
                        <Link to = "/" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe615;</i>
                        </Link>
                    </NavWrap>
                </Header>
                <Content>
                    <div className="location-city">
                        <span>定位城市:</span> 
                        <span><i className = "iconfont icon">&#xe7e0;</i>
                         {sessionStorage.getItem('city')?sessionStorage.getItem('city'):"泉州"}
                        </span>
                    </div>
                    {this.createElement()}
                </Content>
            </Fragment>
        )
    }
    hashBakc() {
        window.history.back();
    }
    createElement() {
        let city = this.props.city;
        if (city) {
            let wordList = [], hot = [],allCity = {};
            city.forEach((ele) => {
                if (!wordList.includes(ele.keyword)) {
                    wordList.push(ele.keyword) 
                }
                if (ele.hot === 1) {
                    hot.push(ele);
                }
                if (!allCity[ele.keyword]) {
                    allCity[ele.keyword] = [];
                }
                if (allCity[ele.keyword]) {
                    allCity[ele.keyword].push(ele);
                }
            })
            return (
                <CityContent>
                    <div className="city">
                        <p className="title">热门城市</p>
                        <ul className="city-cont">
                        {
                            hot.map(ele => {
                                return (
                                    <li className="item" key = {ele.id} >
                                        <Link to="/" onClick={(e) => this.getName(e, ele.name)}>
                                            {ele.name }
                                        </Link>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                    {/* <div className="city">
                        <p className="title">字母排序</p>
                        <ul className="city-cont">
                        {
                            wordList.map((ele,index) => {
                                return (
                                    <li className="item" key = {index} >
                                        <a onClick={this.stop} href={`#${index}`}>{ele}</a>
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div> */}
                    <div className="city">
                    <ul className="city-cont">
                    {
                        wordList.map( (ele, index)=> {
                          return (
                            <Fragment key={index}>
                                <li className="title" id={index}>{ele}</li>
                                {
                                    allCity[ele].map( item => {
                                        return (
                                            <li className="item" key ={item.id}>
                                                <Link to = "/" onClick={(e) => this.getName(e, item.name)}>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }

                            </Fragment>
                          )
                        })
                    }
                    </ul>
                    </div>
                </CityContent>
            )
        }
    }
    componentDidMount() {
        this.props.cityInit();
    }
    getName(e, param) {
        sessionStorage.setItem('city', param);
    }

}

const mapStateToProps = (state) => {
    return {
        city: state.city.city
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cityInit() {
            const action = getCity();
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityPage)