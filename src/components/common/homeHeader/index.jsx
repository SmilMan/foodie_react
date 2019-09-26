import React from 'react';
import { Header, CityWrap, Title, Personal } from './style'
import pic from 'asset/logo/logo.png'
import {api} from 'api/config.js'
import { Link } from 'react-router-dom'
import axios from 'axios'


// 允许携带cookie
// axios.defaults.withCredentials=true;

const changeHistory = () => {
    axios.defaults.withCredentials=true;
    axios.get(`${api}/loginCheck`)
        .then((res) => {
            console.log(res)
            if (res.data.status === 0) {

                //做个缓存，以防用户自动刷新时，myPage数据使用defaultData默认数据
                // sessionStorage.setItem('UsName',res.data.name); 在登入的时候已经做过缓存
                
                window.history.pushState({},'/user/login');
                window.location.href = '#/user/page';  
            }else {
               window.location.href = '#/user/login';
            }
        })
    // window.location = '#/user/login';
}
const FoodieHeader = React.forwardRef((props, ref) => {
        return (
            <Header ref = {ref}>
                <CityWrap >
                    <Link to = "/city/location">
                        <span className="text">{sessionStorage.getItem('city')?sessionStorage.getItem('city'):"泉州"}</span>
                        <i className = "iconfont">&#xe81c;</i>
                    </Link>
                </CityWrap>
                <Title>
                    <img className = "logoImg" src = { pic } alt="title"/>
                </Title>
                <Personal>
                    <span onClick={changeHistory} className = "iconfont " style = {{fontSize: '.6rem'}}>&#xe613;</span>
                </Personal>
            </Header>
        )
    }
)



export default FoodieHeader