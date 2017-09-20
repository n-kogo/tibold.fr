import {createStore} from "redux";
import actionTypes from "./actionTypes";

const reducer = (state = {currentPage: ''}, action: any)=>{
  switch (action.type){
    case actionTypes.CHANGE_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export function configureStore(){
  return createStore(reducer);
}