import * as React from "react";
import {Button} from "./Button";
import {default as actions, actionTypings} from "../store/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

interface MBProps {
  actions: actionTypings
}

export class MoreButtonComponent extends React.Component<MBProps, any>{
  constructor(props: any){
    super(props);
    this.openOverlay = this.openOverlay.bind(this)
  }
  render(){
    return (
      <Button text="En savoir plus" action={this.openOverlay}> </Button>
    )
  }
  openOverlay(){
    this.props.actions.toggleOverlay(true)
  }
}
function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export const MoreButton = connect(null, mapDispatchToProps)(MoreButtonComponent);