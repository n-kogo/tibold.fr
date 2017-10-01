import * as React from "react";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import {ReactDOM} from "react";
import {bindActionCreators} from "redux";
import actions from "../store/actions";
import {connect, DispatchProp} from "react-redux";
import {projects} from "../globals";

interface SideNavProps extends DispatchProp<any>{
  currentPath: string;
  history: any;
  actions: any;
}

class SideNavComponent extends React.Component<SideNavProps, any>{
  routes: Array<string> = ['/'].concat(Object.keys(projects));
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
        <div key={i} className="side-nav__link" onClick={()=> this.navigateTo('/' + route)}>
          <span className="link-info">{this.routeNames[route]}</span>
        </div>
      )
    });
    return (
      <div className="side-nav">
        {links}
      </div>
    )
  }
  navigateTo(route: string){
    console.log('nav to ', route)
    this.props.actions.changePage(route);
    this.props.history.push(route);
  }
}

let SideNavRouter = withRouter(SideNavComponent);

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

function mapStateToProps(state: any, ownProps: any) {
  return {currentPath: state.currentPath}
}

export let SideNav = connect( mapStateToProps, mapDispatchToProps)(SideNavRouter);
