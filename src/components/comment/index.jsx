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
                        <span onClick={this.filterCom.bind(this, "all")}>全部评价：{this.props.totle}</span>
                        <span onClick={this.filterCom.bind(this, "good")}>好评：{this.props.good}</span>
                        <span onClick={this.filterCom.bind(this, "bad")}>差评：{this.props.bad}</span>
                    </div>
                </Dec>
                <CommentWrap>
                    {this.createCommonList()}
                </CommentWrap>
            </Fragment>
        )
    }
    componentWillMount() {
        const param = this.props.match.params.comment.split(".")[0];
        this.props.initComment(param);
    }
    /**
     * 
     * @param {*} comClass  评价的类型 
     */
    filterCom(comClass){
        switch (comClass) {
            case "all":
                this.props.initComment(this.props.match.params.comment.split(".")[0]);
                break;
            case "good":
                this.props.getGoodCom();
                break;
            case "bad":
                this.props.getBadCom();
                break;
            default:
                break;
        }
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
        comment: state.comment.data,
        totle: state.comment.totle,
        good: state.comment.good,
        bad: state.comment.bad
    }
}

const mapDispacthToProps = (dispatch) => {
    return {
        initComment(params) {
            const action = getComment(params);
            dispatch(action);
        },
        getGoodCom() {
            const action = {
                type: "get_good_com",
            }
            dispatch(action);
        },
        getBadCom() {
            const action = {
                type: "get_bad_com"
            };
            dispatch(action);
        }

    }
}


export default connect(mapStateToProps, mapDispacthToProps) (Comment)