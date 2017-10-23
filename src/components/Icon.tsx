import * as React from "react";
import {icons, labels} from "../globals";
import * as classNames from "classnames";
import {MouseEvent} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import actions, {actionTypings} from "../store/actions";

interface IconProps{
  tech: string;
  actions: actionTypings;
}
class IconComponent extends React.Component<IconProps, any>{
  render(){
    return(
      <img
        src={icons[this.props.tech]}
        className={classNames('icon','icon-' + this.props.tech)}
        onMouseEnter={(e: MouseEvent<HTMLElement>)=>this.onHover(e)}
        onMouseLeave={(e: MouseEvent<HTMLElement>)=>this.onMouseOut()}
        onMouseMove={(e: MouseEvent<HTMLElement>)=>this.onMouseMove(e)}
      />
    )
  }
  onHover(e: MouseEvent<HTMLElement>){
    console.log('hover ICON IN')
    this.props.actions.hoverIcon({
      x: e.clientX,
      y: e.clientY,
      text: labels[this.props.tech]
    });
  }
  onMouseMove(e: MouseEvent<HTMLElement>){
    this.props.actions.hoverIcon({
      x: e.clientX,
      y: e.clientY,
      text: labels[this.props.tech]
    });
  }
  onMouseOut(){
    this.props.actions.hoverIcon(null);
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export let Icon = connect(null, mapDispatchToProps)(IconComponent);
