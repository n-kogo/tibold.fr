import * as React from "react";
import {Logo} from "./Logo";
import {SideNav} from "./SideNav";
import {OpenMenu} from "./OpenMenu";

export class Header extends React.Component{
  render(){
    return (
      <div id="header">
        <div style={{flex: "1 0 auto"}}>
          <Logo />
        </div>
        <OpenMenu />
      </div>
    )
  }
}