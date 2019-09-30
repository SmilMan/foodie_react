let defaultData = {
    data:[]
}

export default (state = defaultData, action) => {
    let newData = JSON.parse(JSON.stringify(state));
    if (action.type === "init_order_use") {
        newData.data = action.data;
        return newData;
    }
    //清空数据，以防数据出现闪动（第二次进入时，会闪第一次的数据）
    if (action.type === "order_data_for_null") {
        newData.data = [];
        return newData;
    }
    return defaultData;
}
