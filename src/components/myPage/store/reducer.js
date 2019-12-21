let defaultData = {
   toPay: 0,
   toUse: 0,
   toCom: 0 
}

export default (state = defaultData, action) => {
    let newData = JSON.parse(JSON.stringify(state));
    if (action.type === "init_order_num") {
        newData.toPay = action.data.filter(item => {
            if (item.statu === "未支付") {
                return true
            }
        }).length;

        newData.toUse = action.data.filter(item => {
            if (item.statu === "待使用") {
                return true
            }
        }).length;

        newData.toCom = action.data.filter(item => {
            if (item.statu === "待评价") {
                return true
            }
        }).length;
        return newData;
    }
    return newData;
}