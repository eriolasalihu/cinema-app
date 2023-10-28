import {  SET_COUNTER, SET_ADDLIST } from "./type";

const beauty = {
    counter:0,
    addToCart:[]
}

const rootReducer = (state = beauty, action)=>{
    switch(action.type){
        case SET_COUNTER:
            return {
              ...state, counter: action.counter,
          };
          case SET_ADDLIST:
            return {
              ...state, addToCart: action.addToCart,
          };
        default: return state;
        }

    }

export default rootReducer;
