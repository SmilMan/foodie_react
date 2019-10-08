import axios from 'axios'
import { api } from 'api/config.js'


export const initComment = (data) => {
    return {
        type: "init_comment",
        data
    }
}

export const getComment = (foodname) => {
    return (dispatch) => {
        axios.defaults.withCredentials=true;
        axios.get(`${api}/comment?foodname=${foodname}`)
            .then((res) => {
                // console.log(res)
                if (res.status === 200) {
                    const action = initComment(res.data.data);
                    dispatch(action);
                }
            })
        }
}