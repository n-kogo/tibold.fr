import * as React from "react";
import {Logo} from "./Logo";
import {SideNav} from "./SideNav";

export class Header extends React.Component{
  render(){
    return (
      <div id="header">
        <Logo />
        <SideNav opt={{
          mode: 'long'
        }} />
      </div>
    )
  }
}