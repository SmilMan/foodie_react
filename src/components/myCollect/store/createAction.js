
import axios from 'axios'
import {api} from 'api/config.js'

export let initData = (data) => {
    return {
        type: "init_collect_data",
        data
    }
}

export let getCollectFood = (userName) => {
    return (dispatch) => {
        // 允许携带cookie  如果不加这个的话，axios是不允许携带cookie，当访问服务器时，服务器派发的session_id就不会派发过来，
        axios.defaults.withCredentials=true;
        axios.get(`${api}/getCollect?userName=${userName}`)
            .then(function (response) {
                if (response.data.statu === 0) {
                    const action = initData(response.data.data);
                    dispatch(action);
                }
            })
    }
}