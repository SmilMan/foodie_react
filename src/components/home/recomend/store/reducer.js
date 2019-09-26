import { INIT_ALL_SHOP, CHNAG_LOADING } from './actionType';
const GET_TYPE_SHOP = "get_type_shop";
const CHANGE_NAV_TEXT = "change_nav_text";


let defaultState = {
    loading: true,
    navText: "全部美食"
};


export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    // console.log(action)
    if (action.type === INIT_ALL_SHOP) {
        newState.AllShop = action.data;
        sessionStorage.setItem("AllShop",JSON.stringify(newState.AllShop));
        return newState;  
    }
    if (action.type === CHNAG_LOADING) {
        newState.loading = action.data
        return newState;
    }
    if (action.type === GET_TYPE_SHOP) { //筛选相应类型的食品
        newState.AllShop = JSON.parse(sessionStorage.getItem("AllShop")).filter((ele) => {
            if (ele.type === action.shopType) {
                return true;
            }
            if (action.shopType === "全部美食") {
                return true;
            }
            return false;
        })
        return newState;
    }

    if (action.type === CHANGE_NAV_TEXT) {
        newState.navText = action.shopType;
        return newState;
    }
    return state;
}