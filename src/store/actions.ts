import actionsTypes from './actionTypes'
import {ActionCreatorsMapObject} from "redux";
import {ActionCreator} from "react-redux";

export type actionTypings = {
  changePage: ActionCreator<{type: string, route: string}>
  toggleOverlay: ActionCreator<{type: string, open: boolean}>
}
const actions  : actionTypings = {
  changePage: (route: string)=>{
    return {type: actionsTypes.CHANGE_PAGE, route}
  },
  toggleOverlay:(open:boolean)=>{
    return {type: actionsTypes.TOGGLE_OVERLAY, open}
  }
};
export default actions;

