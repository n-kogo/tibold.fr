import {createStore} from "redux";
import actionTypes from "./actionTypes";

export interface HoverInfoDescriptor {
  x: number,
  y: number,
  text: string
}

interface AppState{
  currentPath: string;
  overlayOpen: boolean;
  hoverInfo: HoverInfoDescriptor | null
}

export const default_state: AppState = {
  currentPath: window.location.pathname,
  overlayOpen: false,
  hoverInfo: null
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
    case actionTypes.HOVER_ICON:
      return Object.assign({}, state, {
        hoverData: action.hoverData
      });
    default:
      return state;
  }
};

export function configureStore(){
  return createStore(reducer);
}