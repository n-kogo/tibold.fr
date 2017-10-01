import * as React from "react";
import {MouseEvent} from "react";
import classNames = require("classnames");
import {connect, DispatchProp} from "react-redux";
import actions, {actionTypings} from "../store/actions";
import {ActionCreatorsMapObject, bindActionCreators} from "redux";
import {default_state} from "../store/createStore";

interface OverlayProps {
  open: boolean,
  actions: actionTypings
}

interface OverlayState{
  open: boolean,
}

class OverlayComponent extends React.Component<OverlayProps, OverlayState>{
  constructor(props: OverlayProps){
    super(props);
  }
  render(){
    return (
      <div
        className={classNames('overlay', {'hidden': !this.props.open})}
        onClick={(e: MouseEvent<HTMLElement>)=>this.checkExteriorClick(e)}>
        <div className="overlay__wrapper">
          <div className="overlay__close-bt" onClick={()=>this.closeOverlay()}></div>
          {this.props.children}
        </div>
      </div>
    )
  }
  closeOverlay(){
    this.props.actions.toggleOverlay(false);
  }

  checkExteriorClick(e: MouseEvent<HTMLElement>){
    if(e.target === e.currentTarget){
      this.closeOverlay()
    }
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

function mapStateToProps(state = default_state, ownProps: any) {
  return {open: state.overlayOpen}
}

export let Overlay = connect(mapStateToProps, mapDispatchToProps)(OverlayComponent);
