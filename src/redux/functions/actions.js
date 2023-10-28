import {  SET_COUNTER,SET_ADDLIST} from "./type";


export const setIsCounter = (number) => {
    return {
        type: SET_COUNTER,
        counter: number
    }
}

export const setAddList = (data) => {
    return {
        type: SET_ADDLIST,
        addToCart: data
    }
}