import  axios from 'axios';
import { INIT_ALL_SHOP, CHNAG_LOADING } from './actionType'

export const initAction = (data) => {
    return {
        type: INIT_ALL_SHOP,
        data
    }
}
export const loading = () => {
    return {
        type: CHNAG_LOADING
    }
}
export const getAllShop = () => {
    return (dispatch) => {
        axios.get('http://192.168.1.107:8000/api/home')
            .then(function (response) {
                if (response.status) {
                    const action = initAction(response.data.data);
                    const showAction = loading();
                    dispatch(showAction)
                    dispatch(action);
                }
            })
    }
}