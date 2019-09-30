let defaultData = {
    data: []
}
let INIT_DETAIL = 'init_order-detail'
export default (state = defaultData, action) => {
    let newData = JSON.parse(JSON.stringify(state));
    if (action.type === INIT_DETAIL) {
        newData.data = action.data;
        return newData;
    }
    return defaultData
}

