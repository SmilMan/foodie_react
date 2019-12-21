import axios from 'axios'
import {api} from 'api/config.js'

export let initData = (data) => {
    return {
        type: "init_order_num",
        data
    }
}

//获取全部的订单用于在myPage页面相应类型下显示有多少个订单
export let getAllOrder = (userName) => {
    return (dispatch) => {
        axios.defaults.withCredentials = true;
        axios.get(`${api}/getAllOrder?username=${userName}`)
            .then( res => {
                if (res.data.statu === 0) {
                    const action = initData(res.data.data);
                    dispatch(action);
                }else{
                    const action = initData([]);
                    dispatch(action);
                }
            })
    }
}