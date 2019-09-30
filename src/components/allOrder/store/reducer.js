let defaultData = {
    data: []
}
const INIT_ALL_ORDER = "init_all_order";
export default (state = defaultData, action) => {
    let newData = JSON.parse(JSON.stringify(state));
    if (action.type === INIT_ALL_ORDER) {
        newData.data = action.data;
        return newData;
    }
    return defaultData
}