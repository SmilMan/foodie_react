import { GET_COMMON } from "./actionType";
import axios from 'axios';
import { api } from "api/config.js"


export const initFood = (data) => {
    return {
        type: "init_food_info",
        data
    }
}

export const getCommonAction = (data) => {
    return {
        type: GET_COMMON,
        data
    }
}

/**
 * 获取详细食物信息
 * @param {*} shopName  商品的名称
 * @param {*} foodName  食品的名称
 * 
 */

export const getFoodData = (shopName, foodName) => {
    return (dispatch) => {
        axios.get(`${api}/shopdetail?shopName="${shopName}"&foodname="${foodName}"`)
            .then( (res) => {
                if (res.status === 200) {
                    const action = initFood(res.data.data[0]);
                    dispatch(action);
                }
            })
    }
}


/**
 * 
 * @param {*} foodname  食品的名称
 * 
 * 获取对应食品的评论
 */
export const getCommon = (foodname) => {
    return (dispatch) => {
        axios.defaults.withCredentials=true;
        axios.get(`${api}/comment?foodname=${foodname}`)
            .then((res) => {
                if (res.status === 200) {
                    const action = getCommonAction(res.data.data);
                    dispatch(action);
                }
            })
    }   
}