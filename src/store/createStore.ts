import {createStore} from "redux";
import actionTypes from "./actionTypes";

interface AppState{
  currentPath: string;
}

const reducer = (state: AppState, action: any)=>{
  if(!state){
    state = {
      currentPath: window.location.pathname
    }
  }
  switch (action.type){
    case actionTypes.CHANGE_PAGE:
      return Object.assign({}, state, {
        currentPath: action.route
      });
    default:
      return state;
  }
};

export function configureStore(){
  return createStore(reducer);
}