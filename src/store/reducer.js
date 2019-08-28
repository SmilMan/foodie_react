import { combineReducers } from 'redux'
import Icon from '../components/home/iconf/store/reducer'
import AllShop from '../components/home/recomend/store/reducer'

export default combineReducers({
    iconList: Icon,
    allshop: AllShop
})
