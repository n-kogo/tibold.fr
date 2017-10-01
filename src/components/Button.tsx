import * as React from "react";
import {Link} from "react-router-dom";

interface ButtonProps{
  text: string,
  link?: string,
  action?: any
}

export class Button extends React.Component<ButtonProps, any>{
  render(){
    if(this.props.link){
      let link = this.props.link;
      return (
        <a className="button" href={link} target="_blank" >{this.props.text}</a>
      )
    }
    else if(this.props.action){
      return (
        <div className="button" onClick={this.props.action}>{this.props.text}</div>
      )
    }
    else{
      return (
        <div className="button">{this.props.text}</div>
      )
    }

  }
}