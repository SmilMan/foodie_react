
import axios from 'axios'
import {api} from 'api/config.js'

let INIT_DETAIL = 'init_order-detail'
export let initOrderDetail = (data) => {
    return {
        type:  INIT_DETAIL,
        data
    }
}


export let getOrderDetail = (param) => {
    return (dispatch) => {
        axios.defaults.withCredentials = true;
        axios.get(`${api}/getNumberOrder?number=${param}`)
            .then( res => {
                console.log(res);
                if (res.data.statu === 0) {
                    const action = initOrderDetail(res.data.data);
                    dispatch(action);
                }
            })
    }
}
