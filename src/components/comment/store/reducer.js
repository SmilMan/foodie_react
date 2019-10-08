let defaultData = {
    data: [],
    totle: 0,
    good: 0,
    bad: 0
}

export default (state = defaultData, action) => {
    let newData = JSON.parse(JSON.stringify(state));
    if (action.type === "init_comment") {
        newData.data = action.data;
        sessionStorage.setItem("com",JSON.stringify(newData));
        let goodCom = newData.data.filter(item => {
            if (item.good === "1") {
                return true;
            }
        })
        newData.good = goodCom.length;
        newData.totle = newData.data.length;
        newData.bad = newData.data.length - goodCom.length;
        return newData;
    }

    if (action.type === "get_good_com") {
        newData.data = JSON.parse(sessionStorage.getItem("com")).data.filter(item => {
            if (item.good === "1") {
                return true;
            }
        })
        return newData;        
    }
    if (action.type === "get_bad_com") {
        newData.data = JSON.parse(sessionStorage.getItem("com")).data.filter(item => {
            if (item.good === "0") {
                return true;
            }
        })
        return newData; 
    }

    return  newData;
}