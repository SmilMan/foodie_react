import  axios from 'axios';
import { INIT_ALL_SHOP, CHNAG_LOADING } from './actionType'
import { api } from 'api/config.js'

export const initAction = (data) => {
    return {
        type: INIT_ALL_SHOP,
        data
    }
}
export const loading = () => {
    return {
        type: CHNAG_LOADING,
        data: false
    }
}
export const getAllShop = () => {
    return (dispatch) => {
        // 允许携带cookie  如果不加这个的话，axios是不允许携带cookie，当访问服务器时，服务器派发的session_id就不会派发过来，
        axios.defaults.withCredentials=true;
        axios.get(`${api}/home`)
            .then(function (response) {
                if (response.status === 200) {
                    const action = initAction(response.data.data);
                    const showAction = loading();
                    dispatch(showAction);
                    dispatch(action);
                }
            })
    }
}