
import React from 'react'
import App from '../App';

import ShopDetail from '@/components/shopDetail/async'
import NotFound from '@/components/NotFound/index'
import Food from '@/components/foodPage/async'
import Comment from '@/components/comment/index'
import CityPage from '@/components/cityPage/index'
import LoginPage from '@/components/loginPage/index'
import ImgBar from '@/components/imgBar/index'

import MyPage from '@/components/myPage/index'
import MyLuckDraw from '@/components/myPage/componentItem/myLuckDraw/index'
import Diyongjuan from '@/components/myPage/componentItem/diyongjuan/index'
import MyJifen from '@/components/myPage/componentItem/jifen/index'

import MyInfo from '@/components/myInfo/index'
import ChangeUsN from '@/components/myInfo/componentItem/changeUserName/index'
import ChangeUsP from '@/components/myInfo/componentItem/changeUserPas/index'
import BindPhone from '@/components/myInfo/componentItem/bindPhone/index'

import AllOrder from '@/components/allOrder/index'
import OrderToCom from '@/components/allOrder/componentsItem/orderToCom/index'
import OrderToPay from '@/components/allOrder/componentsItem/orderToPay/index'
import OrderToUse from '@/components/allOrder/componentsItem/orderToUse/index'

import OrderSure from '@/components/orderSure/index'

import OrderPay from '@/components/orderPay/index'

import OrderDetail from '@/components/orderDetail/index'

import OrderComment from '@/components/orderComment/index'

import Register from '@/components/register/index'

import MapL from '@/components/map/index'


import { Router, Route, IndexRoute, Switch, Redirect } from 'react-router'
// import { BrowserRouter, Route} from 'react-router-dom'  一

import { createHashHistory } from "history";
const history = createHashHistory();

function RouterMap() {  
    return (
            //         一 
            //         <BrowserRouter >
            //            <Route path="/" component={App}></Route>
            //            <Route path= "/about" component = {ShopDetail}></Route>
            //         </BrowserRouter>
        <Router history={history}>
            {/* 需要用到 Switch 组件包括路由组件（Switch组件保证只渲染其中一个子路由) */}
            {/* 有<Switch>标签，则其中的<Route>在路径相同的情况下，只匹配第一个，这个可以避免重复匹配
            无<Switch>标签，则其中的<Route>在路径相同的情况下全都会匹配。更严重的是，还会匹配上级路径的 */}
            <Switch>
                <Route path="/" exact component={App}></Route>
                <Route path="/:name" exact component={App}></Route>
                <Route path="/food/:foodname" component={Food}></Route>
                <Route path="/shopDetail/:shopname" exact  component={ShopDetail}></Route>
                <Route path="/comment/:comment" exact component={Comment}></Route>
                <Route path="/city/location" exact component={CityPage}></Route>
                <Route path = "/map/location/:local" exact component={MapL}></Route>
                <Route path = "/user/page" exact component={MyPage}></Route>
                <Route path = "/user/login" exact component={LoginPage}></Route>
                <Route path = "/imgBar/:shopImg" exact component={ImgBar}></Route>
                <Route path = "/user/info" exact component={MyInfo}></Route>
                
                <Route path = "/user/changeUsName" exact component={ChangeUsN}></Route>         
                <Route path = "/user/changeUsPas" exact component={ChangeUsP}></Route>
                <Route path = "/user/bindPhone" exact component={BindPhone}></Route>

                {/* 我的抽奖单 */}
                <Route path = "/user/luckDraw" exact component={MyLuckDraw}></Route>
                <Route path = "/user/juan" exact component={Diyongjuan}></Route>
                <Route path = "/user/jifen" exact component={MyJifen}></Route>


                <Route path = "/user/allOrder" exact component={AllOrder}></Route>  
                <Route path = "/user/OrderToUse/:toUse" exact component={OrderToUse}></Route> 
                <Route path = "/user/OrderToPay/:toPay" exact component={OrderToPay}></Route>
                <Route path = "/user/OrderToCom/:toCom" exact component={OrderToCom}></Route>

                <Route path = "/user/OrderSure/:order" exact component={OrderSure}></Route>

                <Route path = "/user/OrderPay/:pay" exact component={OrderPay}></Route>

                <Route path = "/user/OrderDetail/:orderNumber" exact component={OrderDetail}></Route>

                <Route path = "/user/OrderComment/:comment" exact component={OrderComment}></Route>

                <Route path = "/user/register" exact component={Register}></Route>
                {/* 第一种用法 */}
                <Route  component = {NotFound} />

                {/* 第二种方法  重定向
                <Route path="/NotFound" component = {NotFound}/>
                <Redirect to ="/NotFound"/> */}
            </Switch>
        </Router>
   )
}


export default RouterMap

