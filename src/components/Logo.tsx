import * as React from "react";
import {Link} from "react-router-dom";
import {LinkWrapper} from "./LinkWrapper";

interface LogoProps{
  fontSize?: number;
}

export class Logo extends React.Component<LogoProps, any>{
  render(){
    let style: any = {};
    if(this.props.fontSize) style.fontSize = this.props.fontSize + 'px';
    return (
      <LinkWrapper link={'/'}>
        <div className="main-logo" style={style}>
          <span>T</span>
          <span>i</span>
          <span>b</span>
          <span>o</span>
          <span>l</span>
          <span>d</span>
        </div>
      </LinkWrapper>
    )
  }
}