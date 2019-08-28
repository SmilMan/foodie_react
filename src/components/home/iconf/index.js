import React from 'react'
import { WrapUl } from './style'
import { connect } from 'react-redux'


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
                        <a href = "www.baidu.com">
                            <i className = "iconfont" style = { {background:ele.bg} } dangerouslySetInnerHTML = {{__html:ele.icon}}></i>
                            <span>{ ele.text }</span>
                        </a>
                    </li>
                )}
            )
    }
}
const mapStateToProps = (state) => {
    return {
        Icon: state.iconList.Icon
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // getIconList() {
        //     const action = {
        //         type: "get_icon_list"
        //     }
        //     dispatch(action);
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Iconf)
