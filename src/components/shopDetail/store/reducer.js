import { INIT_SHOP_DETAIL } from './actionType';
const defaultData = {
    data: []
};


export default (state = defaultData, action) => {
    let newData = JSON.parse(JSON.stringify(state));
    if (action.type === 'init_food_info') {
        newData = JSON.parse(sessionStorage.getItem("shopDetail"))
        newData.data[0].food = newData.data[0].food.filter( (ele) => {
            if( ele.foodname === action.foodName){
                return true;
            }
            return false;
        })
        return newData;
    }
    if (action.type === INIT_SHOP_DETAIL) {
        newData.data = action.data;
        sessionStorage.setItem("shopDetail",JSON.stringify(newData))
        return newData;
    }
    return newData
}