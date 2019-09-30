import { combineReducers } from 'redux'
import Icon from 'home/iconf/store/reducer'
import AllShop from 'home/recomend/store/reducer'
import ShopDetail from '@/components/shopDetail/store/reducer'
import foodDetail from '@/components/foodPage/store/reducer'
import comment from '@/components/comment/store/reducer'
import city from '@/components/cityPage/store/reducer'
import imgBar from '@/components/imgBar/store/reducer'

import myPage from '@/components/myPage/store/reducer'

import allOrder from '@/components/allOrder/store/reducer'

//三个共同使用一个reducer  orderToUse  orderToPay orderToCom
import orderToUse from '@/components/allOrder/componentsItem/store/reducer'

import orderDetail from '@/components/orderDetail/store/reducer'

export default combineReducers({
    iconList: Icon,
    allShop: AllShop,
    shopDetail: ShopDetail,
    foodDetail, //将所有的评论请求过来，进行相应的截取。在foodpage 只显示其中的一部分。
    comment, //在评论页里，显示所有的评论内容。
    city,
    imgBar,
    myPage,
    allOrder,
    orderToUse,
    orderDetail
})
