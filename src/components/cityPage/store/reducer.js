let defaultData = {
    city: []
}


export default (state = defaultData, action) => {
    let newData = JSON.parse(JSON.stringify(state));
    if (action.type === "init_city") {
        newData.city = action.data;
        return newData;
    }
    return {}
}