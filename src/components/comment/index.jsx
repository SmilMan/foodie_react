import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import {connect } from 'react-redux'

import { Header, 
    Back, 
    Title, 
    NavWrap,
    CommentWrap,
    Dec
} from  './style'

import {getComment} from './store/createAction'


class Comment extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                <Header>
                    <Back>
                        <div className= "icon-wrap" onClick = { this.hashBakc }>
                            <i className = "iconfont icon">&#xe682;</i>
                        </div>
                    </Back>
                    <Title>评价</Title>
                    <NavWrap>
                        <Link to = "/" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe615;</i>
                        </Link>
                    </NavWrap>
                </Header>
                <Dec>
                    <div className="totle-recoment">
                        总体评价：
                        <i className="iconfont icon">&#xe6b0;</i>
                        <i className="iconfont icon">&#xe6b0;</i>
                        <i className="iconfont icon">&#xe6b0;</i>
                        <i className="iconfont icon">&#xe6b0;</i>
                        <i className="iconfont icon">&#xe637;</i>
                    </div>
                    <div className="classfy">
                        <span>全部评价：{this.props.comment.length}</span>
                        <span onClick={this.filterCom.bind(this, 1)}>好评：{0}</span>
                        <span onClick={this.filterCom.bind(this, 0)}>差评：{0}</span>
                    </div>
                </Dec>
                <CommentWrap>
                    {this.createCommonList()}
                </CommentWrap>
            </Fragment>
        )
    }
    componentDidMount() {
        const param = this.props.match.params.comment.split(".")[0];
        this.props.initComment(param);
    }
    filterCom(){
        
    }
    hashBakc() {
        window.history.back();
    }
    createCommonList() {
            if (this.props.comment.length > 0) {
                return (
                    this.props.comment.map((ele, index) => {
                        return <div className="content" key = {index}>
                            <div className="wrap">
                                <div className="img">
                                    <img src={ele.photo} alt=""/>
                                </div>
                                <div className="user-info">
                                    <p>{ele.use_name}</p>
                                    <p>
                                        星级: <span>{ele.star_num}</span><span>{ele.time}</span>
                                    </p>
                                </div>
                            </div>    
                            <div className="cont">{ele.content}</div>
                        </div>
                    })
                )
            }
        }
}

const mapStateToProps = (state) => {
    return {
        comment: state.comment.data
    }
}

const mapDispacthToProps = (dispatch) => {
    return {
        initComment(params) {
            const action = getComment(params);
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispacthToProps) (Comment)