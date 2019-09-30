import { INIT_SHOP_DETAIL } from './actionType';
const defaultData = {
    data: []
};


export default (state = defaultData, action) => {
    let newData = JSON.parse(JSON.stringify(state));
    if (action.type === INIT_SHOP_DETAIL) {
        newData.data = action.data;
        return newData;
    }
    return newData
}