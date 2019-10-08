
import { INIT_FOOD_INFO, GET_COMMON} from "./actionType"
const defaultState = {
    comment: [],
    foodData: {},
    collect: false
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));

    if (INIT_FOOD_INFO === action.type)  {
        newState.foodData = action.data
        newState.collect = action.data.food[0].collect === "false" ? false : true;
        return newState
    }
    if (action.type === GET_COMMON) {
        newState.comment = action.data;
        return newState;
    }
    /**
     * 修改收藏的状态
     */
    if (action.type === "change_collect") {
        newState.collect = !newState.collect;
        return newState;
    }
    //退出前数据清空  以免下次进来时，会闪一下上一次的数据内容
    if (action.type === "data_for_null") {
        newState.foodData = {food:[]};
        newState.comment = []
    }
    return newState;
}