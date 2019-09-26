
import { INIT_FOOD_INFO, GET_COMMON} from "./actionType"
const defaultState = {
    comment: []
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    //初始化foodPage的数据的，但是这部分的数据可以从shopDetail中解析，所以该判断没用到
    // if (INIT_FOOD_INFO === action.type)  {
    //     newState.foodData = action.data[0];
    //     return newState
    // }
    if (action.type === GET_COMMON) {
        newState.comment = action.data;
        return newState;
    }
    return newState;
}