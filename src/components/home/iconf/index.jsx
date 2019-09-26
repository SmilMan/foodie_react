import React from 'react'
import { WrapUl } from './style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


import {
    typeShopAction,
    navTextAction
} from './store/createAction'


class Iconf extends React.Component{
    render() {
        return (
            <WrapUl>
                {this.createList()}
            </WrapUl>
        )
    }
    createList() {
        return this.props.Icon.map((ele, index) => {
                return ( 
                    <li key = { index }> 
                        <Link to = {"/" + ele.text} className="icon-wrap" onClick = {this.props.getTypeShop.bind(this,ele.text)}>
                            <i className = "iconfont" style = { {background:ele.bg} } dangerouslySetInnerHTML = {{__html:ele.icon}}></i>
                            <span>{ ele.text }</span>
                        </Link>
                    </li>
                )}
            )
    }
}
const mapStateToProps = (state) => {
    return {
        Icon: state.iconList.Icon,
        allShop: state.allShop.AllShop
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getTypeShop(shopType) {
            sessionStorage.setItem("shopType", shopType);
            let shopAction = typeShopAction(shopType);
            const navAction = navTextAction(shopType);
            dispatch(shopAction);  // 派发action 去进行相应的美食类型的筛选
            dispatch(navAction);   // 派发action 去改变首页的导航的内容
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Iconf)
