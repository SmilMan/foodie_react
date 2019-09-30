import axios from 'axios'
import {api} from 'api/config.js'

const INIT_ALL_ORDER = "init_all_order";
export const initAllOrder = (data) => {
    return {
        type: INIT_ALL_ORDER,
        data
    }
}


export const getAllOrder = () => {
    return (dispatch) => {
        axios.defaults.withCredentials= true;
        axios.get(`${api}/getAllOrder`)
            .then( res => {
                if (res.data.statu === 0) {
                    const action = initAllOrder(res.data.data);
                    dispatch(action);
                }else{
                    const action = initAllOrder([]);
                    dispatch(action);
                }
            })
    }
}