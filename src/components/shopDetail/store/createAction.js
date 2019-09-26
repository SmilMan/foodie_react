import { INIT_SHOP_DETAIL } from './actionType'
import axios from 'axios'
import { api } from 'api/config'
export const initAction = (data) => {
    return {
        type: INIT_SHOP_DETAIL,
        data
    }
}


export const getShopDetail = (param) => {
    return (dispatch) => {
        axios.defaults.withCredentials=true;
        axios.get(`${api}/shopdetail?shopName="${param}"`)
            .then( (res) => {
                if (res.status ===200) {
                   const action = initAction(res.data.data);
                   dispatch(action);
                }
            },(err) => {
                console.log(err);
            })
    }
}