import { INIT_ALL_SHOP, CHNAG_LOADING } from './actionType'
let defaultState = {
    loading: true
}


export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    console.log(action)
    if (action.type === INIT_ALL_SHOP) {
        newState.AllShop = action.data;
        return newState;  
    }
    if (action.type === CHNAG_LOADING) {
        newState.loading = !newState.loading;
        return newState;
    }
    return state
}