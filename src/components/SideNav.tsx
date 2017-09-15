import * as React from "react";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import {ReactDOM} from "react";

class SideNavComponent extends React.Component{
  routes: Array<string> = ['', 'hens-world', 'le-refuge-des-souvenirs', 'the-last-frontier', 'eternity-run', 'wittyfit'];
  routeNames: {[s: string]: string} = {
    '': 'Home',
    'hens-world': 'Hens World',
    'le-refuge-des-souvenirs': 'Le Refuge des Souvenirs',
    'eternity-run': 'One Eternity to Run',
    'wittyfit': 'Wittyfit',
    'the-last-frontier': 'The Last Frontier'
  };
  render(){
    let links: Array<JSX.Element> = this.routes.map((route, i)=>{
      return (
        <Link key={i} className="side-nav__link" to={'/' + route}>
          <span className="link-info">{this.routeNames[route]}</span>
        </Link>
      )
    });
    return (
      <div className="side-nav">
        {links}
      </div>
    )
  }
}

export let SideNav = withRouter(SideNavComponent);