import * as React from "react";
import {SideNav} from "./SideNav";
import {MouseEvent} from "react";
import {default as actions, actionTypings} from "../store/actions";
import classNames = require("classnames");
import {default_state} from "../store/createStore";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

interface MenuProps {
  open: boolean,
  actions: actionTypings
}

interface MenuState{
  open: boolean,
}

export class MenuComponent extends React.Component<MenuProps, MenuState>{
  render(){
    return (
      <div
        id="menu"
        className={classNames({'open': this.props.open})}
        onClick={(e: MouseEvent<HTMLElement>)=>this.checkExteriorClick(e)}
      >
        <div className="menu__content">
          <SideNav
            opt={{mode:'vertical', closeMenu: true}}
            onClick={()=>this.closeMenu()}
          />
        </div>
      </div>
    )
  }
  closeMenu(){
    this.props.actions.toggleMenu(false);
  }

  checkExteriorClick(e: MouseEvent<HTMLElement>){
    if(e.target === e.currentTarget){
      this.closeMenu()
    }
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

function mapStateToProps(state = default_state, ownProps: any) {
  return {open: state.menuOpen}
}

export let Menu = connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
