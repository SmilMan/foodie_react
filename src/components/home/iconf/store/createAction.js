import { GET_TYPE_SHOP, CHANGE_NAV_TEXT } from './actionType'


export const typeShopAction = (shopType) =>  {
   return {
        type: GET_TYPE_SHOP,
        shopType
   } 
}


export const navTextAction = (shopType) => {
    return {
        type: CHANGE_NAV_TEXT,
        shopType
    }
}