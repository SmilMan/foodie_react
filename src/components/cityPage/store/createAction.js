import axios from 'axios';
import { api } from 'api/config'


export const init_city  = (data) => {
    return {
        type: "init_city",
        data
    }
}


export const getCity = () => {
    return (dispatch) => {
        axios.defaults.withCredentials=true;
        axios.get(`${api}/city`)
            .then(res => {
                if (res.status === 200) {
                    const action = init_city(res.data.data);
                    dispatch(action);
                }
            })
    }
}
