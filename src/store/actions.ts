import actionsTypes from './actionTypes'
import {ActionCreatorsMapObject} from "redux";
import {ActionCreator} from "react-redux";
import {HoverInfoDescriptor} from "./createStore";

export type actionTypings = {
  changePage: ActionCreator<{type: string, route: string}>
  toggleOverlay: ActionCreator<{type: string, open: boolean}>
  toggleMenu: ActionCreator<{type: string, open: boolean}>
  hoverIcon: ActionCreator<{type: string, hoverData: HoverInfoDescriptor}>
}
const actions  : actionTypings = {
  changePage: (route: string)=>{
    return {type: actionsTypes.CHANGE_PAGE, route}
  },
  toggleOverlay:(open:boolean)=>{
    return {type: actionsTypes.TOGGLE_OVERLAY, open}
  },
  toggleMenu:(open:boolean)=>{
    return {type: actionsTypes.TOGGLE_MENU, open}
  },
  hoverIcon: (hoverData: HoverInfoDescriptor)=>{
    return {type: actionsTypes.HOVER_ICON, hoverData}
  }
};

export default actions;

