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
 * 
 * @param {*} shopName  商品的名称
 * @param {*} foodName  食品的名称
 * 没用到，因为部分的数据。可以借用shopDetail的数据，进行相应的整理
 */

export const getFoodData = (shopName, foodName) => {
    return (dispatch) => {
        axios.get(`${api}/shopdetail?shopName="${shopName}"&foodname="${foodName}"`)
            .then( (res) => {
                console.log(res);
                if (res.status === 200) {
                    const action = initFood(res.data.data);
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