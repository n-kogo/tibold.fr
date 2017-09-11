import * as React from "react";
import {PageNav} from "./PageNav";

export class Navbar extends React.Component{
  render(){
    return (
      <div className="navbar">
        <div className="navbar__page-name"></div>
        <PageNav />
        <a className="navbar__page-action"></a>
      </div>
    )
  }
}