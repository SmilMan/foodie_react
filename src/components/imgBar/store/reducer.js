import { INIT_IMGBAR } from './actionType'

let defaultData = {
    imgBar: []
}

export default (state, action) => {
    let newData = JSON.parse(JSON.stringify(defaultData));
    if( action.type === INIT_IMGBAR) {
        newData.imgBar = action.data
        return newData;
    }
    return defaultData
}