import { INIT_IMGBAR } from './actionType'
import {api} from 'api/config.js'
import axios from 'axios'

export let initImgBar = (data) => {
    return {
        type: INIT_IMGBAR,
        data
    }
}

export let getImgBar = (param) => {
    return (dispatch) => {
        axios.defaults.withCredentials=true;
        axios.get(`${api}/imgbar?shopname=${param}`)
            .then( result => {
                if (result.data.length) {
                    const action = initImgBar(result.data);
                    dispatch(action);
                }
            })
    }
}
