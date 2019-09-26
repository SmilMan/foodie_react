import { combineReducers } from 'redux'
import Icon from 'home/iconf/store/reducer'
import AllShop from 'home/recomend/store/reducer'
import ShopDetail from '@/components/shopDetail/store/reducer'
import foodComment from '@/components/foodPage/store/reducer'
import comment from '@/components/comment/store/reducer'
import city from '@/components/cityPage/store/reducer'
import imgBar from '@/components/imgBar/store/reducer'

import myPage from '@/components/myPage/store/reducer'

export default combineReducers({
    iconList: Icon,
    allShop: AllShop,
    shopDetail: ShopDetail,
    foodComment, //将所有的评论请求过来，进行相应的截取。在foodpage 只显示其中的一部分。
    comment, //在评论页里，显示所有的评论内容。
    city,
    imgBar,
    myPage
})
