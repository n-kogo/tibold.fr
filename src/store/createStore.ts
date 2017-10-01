import {createStore} from "redux";
import actionTypes from "./actionTypes";

interface AppState{
  currentPath: string;
  overlayOpen: boolean;
}

export const default_state = {
  currentPath: window.location.pathname,
  overlayOpen: false
};

const reducer = (state: AppState, action: any)=>{
  if(!state){
    state = default_state;
  }
  switch (action.type){
    case actionTypes.CHANGE_PAGE:
      return Object.assign({}, state, {
        currentPath: action.route
      });
    case actionTypes.TOGGLE_OVERLAY:
      return Object.assign({}, state, {
        overlayOpen: action.open
      });
    default:
      return state;
  }
};

export function configureStore(){
  return createStore(reducer);
}