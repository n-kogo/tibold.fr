import {createStore} from "redux";
import actionTypes from "./actionTypes";

export interface HoverInfoDescriptor {
  x: number,
  y: number,
  text: string
}

export interface AppState{
  currentPath: string;
  overlayOpen: boolean;
  menuOpen: boolean;
  hoverInfo: HoverInfoDescriptor | null
}

export const default_state: AppState = {
  currentPath: window.location.pathname,
  overlayOpen: false,
  menuOpen: false,
  hoverInfo: null
};

const reducer = (state: AppState, action: any): AppState =>{
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
    case actionTypes.TOGGLE_MENU:
      return Object.assign({}, state, {
        menuOpen: action.open
      });
    case actionTypes.HOVER_ICON:
      return Object.assign({}, state, {
        hoverInfo: action.hoverData
      });
    default:
      return state;
  }
};

export function configureStore(){
  return createStore(reducer);
}