import * as React from "react";
import {icons} from "../globals";
import * as classNames from "classnames";
import {MouseEvent} from "react";

interface IconProps{
  tech: string;
}
export class Icon extends React.Component<IconProps, any>{
  render(){
    return(
      <img
        src={icons[this.props.tech]}
        className={classNames('icon','icon-' + this.props.tech)}
        onMouseEnter={(e: MouseEvent<HTMLElement>)=>this.onHover(this.props.tech, e)}
        onMouseLeave={(e: MouseEvent<HTMLElement>)=>this.onMouseOut()}
        onMouseMove={(e: MouseEvent<HTMLElement>)=>this.onMouseMove(e)}
      />
    )
  }
  onHover(hovered: string, e: MouseEvent<HTMLElement>){
    this.setState({
      hovered: hovered,
      mouse: {
        x: e.clientX,
        y: e.clientY
      }
    });
  }
  onMouseMove(e: MouseEvent<HTMLElement>){
    this.setState({
      mouse: {
        x: e.clientX,
        y: e.clientY
      }
    })
  }
  onMouseOut(){
    this.setState({
      hovered: null
    });
  }
}