import axios from 'axios'
import {api} from 'api/config.js'
const INIT_ORDER_USE = "init_order_use"

export let initOrderUse = (data) => {
    return {
        type: INIT_ORDER_USE,
        data
    }
}
/**
 * orderToCom orderToUse  orderToPay 三个页面根据不同类型，选出订单
 */
export let getOrderUse = (classfy, userName) => {
    return (dispatch) => {
        axios.defaults.withCredentials= true;
        axios.get(`${api}/getClassOrder?classfy=${classfy}&username=${userName}`)
            .then( res => {
                if (res.data.statu ===0) {
                    const action = initOrderUse(res.data.data);
                    dispatch(action);
                }else {
                    const action = initOrderUse([])
                    dispatch(action);
                }
            })
    }
}

/**
 * 未支付订单取消 根据订单编号来删除订单
 * 后端会先执行删除相应编号的订单，然后再将剩余的订单数据返回，前端派发action去改数据，页面就相应啦。
 */
export let delectNoPay = (number)  => {
    return (dispatch) => {
        let formData = new FormData();
        formData.append('number', number);
        formData.append('username', sessionStorage.getItem("UsName"));
        axios.defaults.withCredentials= true;
        axios.post(`${api}/deleteOrder`, formData,{
             headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then( res => {
            if (res.data.statu ===0) {
                const action = initOrderUse(res.data.data);
                dispatch(action);
               
            }else{
                const action = initOrderUse([]);
                dispatch(action);
            }
        })
    }
}
