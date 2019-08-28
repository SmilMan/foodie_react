import React from 'react';
import { Header, CityWrap, Title, Personal } from './style'
import pic from '../../../asset/logo/logo.png'


const FoodieHeader = React.forwardRef((props, ref) => {
        return (
            <Header ref = {ref}>
                <CityWrap >
                    <div>
                        泉州
                        <i className = "iconfont">&#xe81c;</i>
                    </div>
                </CityWrap>
                <Title>
                    <img className = "logoImg" src = { pic } alt="title"/>
                </Title>
                <Personal>
                    <i className = "iconfont " style = {{fontSize: '.6rem'}}>&#xe613;</i>
                </Personal>
            </Header>
        )
    }
)

export default FoodieHeader