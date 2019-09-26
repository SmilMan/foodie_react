// import { GET_TYPE_SHOP } from './actionType'

let defaultState ={
    Icon:[
        {
            icon: "&#xe611;",
            text: "全部美食",
            bg: "#fed030"
        },{
            icon: "&#xe614;",
            text: "自助餐",
            bg: "#ff6767"
        },{
            icon: "&#xe635;",
            text: "小吃快餐",
            bg: "#fd9d21"
        },{
            icon:"&#xe622;",
            text: "甜点饮品",
            bg: "#8a90fa"
        },{
            icon:"&#xe6eb;",
            text:"西餐",
            bg: "#fd9d21"
        },{
            icon:"&#xe605;",
            text:"海鲜",
            bg: "#fed030"
        }
    ]
}
export default (state = defaultState, action) => {
    return state;
}