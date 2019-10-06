import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

import axios from 'axios'
import {api} from 'api/config.js'

import { Header, 
    Back, 
    Title, 
    NavWrap,
    ContentWrap
} from  './style'


class OrderComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: '',
            classValue: '', //评论类型数据
            classFlag: true,  //判断评论类型是否为空
            scoreValue: '',
            scoreFlag: true,
            comContent: '',
            comFlag: true
            
        }
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
                        <Link to = "/user/page" className= "icon-wrap right-nav">
                            <i className = "iconfont icon icon-nav">&#xe613;</i>
                        </Link>
                    </NavWrap>
                </Header>
                <ContentWrap>
                    <textarea onClick = {this.changeFlag.bind(this)} style={this.state.comFlag ? {border:"none"} : {border: "1px solid #f40"}} onChange = {(e) =>this.getContent.call(this, e)} cols="30" rows="8" placeholder="输入您的评论内容"></textarea>
                    <div onClick = {this.changeFlag.bind(this)} style={this.state.classFlag ? {border:"none"} : {border: "1px solid #f40"}} className="com">
                       <h4>评价类型</h4> 
                       <span style={{marginRight: "1rem"}}>好评：<input value="1" onChange={(e)=>this.getClassValue.call(this, e)} type="radio" name="com"/></span>
                       <span>差评：<input value="0" onChange={(e)=>this.getClassValue.call(this, e)} type="radio" name="com"/></span>
                    </div>
                    <div onClick = {this.changeFlag.bind(this)} style={this.state.scoreFlag ? {border:"none"} : {border: "1px solid #f40"}} className="com">
                       <h4>整体评分</h4> 
                       <span style={{marginRight: ".4rem"}}>3.0<input value="3.0" readOnly onClick={(e)=>this.getScoreValue(e)} type="radio" name="score"/></span>
                       <span style={{marginRight: ".4rem"}}>3.5<input value="3.5" onChange={(e)=>this.getScoreValue.call(this, e)} type="radio" name="score"/></span>
                       <span style={{marginRight: ".4rem"}}>4.0<input value="4.0" onChange={(e)=>this.getScoreValue.call(this, e)} type="radio" name="score"/></span>
                       <span style={{marginRight: ".4rem"}}>4.5<input value="4.5" onChange={(e)=>this.getScoreValue.call(this, e)} type="radio" name="score"/></span>
                       <span style={{marginRight: ".4rem"}}>5.0<input value="5.0" onChange={(e)=>this.getScoreValue.call(this, e)} type="radio" name="score"/></span>
                    </div>
                    <div className="btnForCom">
                       <span onClick={this.submitCom.bind(this)} className="com-btn">提交评价</span> 
                    </div>
                </ContentWrap>
            </Fragment>
       )
    }
    hashBakc() {
        window.history.back();
    }
    /**
     * 获取评论的内容   防抖
     */
    getContent(e) {
        let value = e.target.value;
        clearTimeout(this.state.time);
        this.state.time = setTimeout( () => {
            this.setState({
                    comContent: value
                })
        }, 1000)
    }
    /**
     * 获取评分
     */
    getScoreValue(e) {
        this.setState({
            scoreValue: e.target.value
        })
    }
    /**
     * 获取评论的类型
     */
    getClassValue(e) {
        this.setState({
            classValue: e.target.value
        })
    }
    /**
     * 当点击时，将红色的提示去掉。
     */
    changeFlag() {
        this.setState( () => ({
            classFlag: true
        }))
        this.setState( () => ({
            comFlag: true
        }))
        this.setState( () => ({
            scoreFlag: true
        }))
    }

    submitCom() {
        if (this.state.classValue && this.state.comContent && this.state.scoreValue){
            const userName = sessionStorage.getItem("UsName");
            const photo = "https://p0.meituan.net/mmc/89bec9d64cde38d441cf976f751c482e3788.png@148w_148h_1e_1c";
            const time = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`;
            const foodName = this.props.match.params.comment.split('&')[0];
            const order_number = this.props.match.params.comment.split('&')[1];


            let formData  = new FormData();
            formData.append('userName', userName);
            formData.append('photo',photo);
            formData.append('time',time);
            formData.append('foodName', foodName);
            formData.append('content', this.state.comContent);
            formData.append('good',this.state.classValue);
            formData.append('star_num', Number(this.state.scoreValue));
            axios.defaults.withCredentials=true;
            axios.post(`${api}/addComment`, formData , {
                headers:{'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then( res => {
                if (res.data.statu === 0) {
                    let formData  = new FormData();
                    formData.append('statu','已完成');
                    formData.append('statu_msg','完成');
                    formData.append('orderNumber',order_number);
                    axios.defaults.withCredentials=true;
                    axios.post(`${api}/updateStatu`, formData , {
                        headers:{'Content-Type': 'application/x-www-form-urlencoded'}
                    })
                    .then( result => {
                        //当修改订单状态成功时, 再次请求待使用的订单数据，然后更新页面。
                        alert("评论成功")
                        window.history.back();
                    })
                }else{
                    alert('评论失败')
                }
            })
        }else{
            switch (0) {
                case 0:;
                case 1:
                        if (!this.state.classValue) {
                            this.setState({
                                classFlag: false
                            })
                        };
                case 2: 
                        if (!this.state.scoreValue) {
                            this.setState({
                                scoreFlag: false
                            })
                        };
                case 3:
                    if (!this.state.comContent) {
                        this.setState({
                            comFlag: false
                        })
                    };
            }
        }
    }
}

export default OrderComment