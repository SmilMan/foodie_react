let defaultData = {
    data: []
}

export default (state=defaultData, action) => {
    let newData = JSON.parse(JSON.stringify(state));
    if (action.type === "init_collect_data") {
        newData.data = action.data;
        console.log(action.data)
        return newData;
    }
   return  newData;
}