import * as React from "react";
import {withRouter} from "react-router";
import {Link} from "react-router-dom";
import {ReactDOM} from "react";
import {bindActionCreators} from "redux";
import actions, {actionTypings} from "../store/actions";
import {connect, DispatchProp} from "react-redux";
import {projects} from "../globals";
import * as classNames from "classnames";
import {LinkWrapper} from "./LinkWrapper";

interface SideNavProps{
  currentPath: string;
  history: any;
  actions: actionTypings;
  opt: {
    mode: 'normal' | 'vertical',
    closeMenu: boolean
  }
}

class SideNavComponent extends React.Component<SideNavProps, any>{
  routes: Array<string> = [].concat(Object.keys(projects));
  routeNames: {[s: string]: string} = {
    'home': 'Station',
    'hens-world': 'Hens World',
    'le-refuge-des-souvenirs': 'Le Refuge des Souvenirs',
    'eternity-run': 'One Eternity to Run',
    'wittyfit': 'Wittyfit',
    'the-last-frontier': 'The Last Frontier'
  };
  render(){
    let opt = this.props.opt || {mode: 'normal'};
    let links: Array<JSX.Element> = this.routes.map((route, i)=>{
      return (
        <LinkWrapper link={'/' + route}  key={i}>
          <div className={classNames("side-nav__link", {"active": '/' + route === this.props.currentPath})} onClick={()=>this.checkAction()}>
            <div className={"side-nav__link-dot"}>
            </div>
            <span className="link-info">{this.routeNames[route]}</span>
          </div>
        </LinkWrapper>
      )
    });

    return (
      <div className={classNames("side-nav", opt.mode)}>
        {links}
      </div>
    )
  }

  checkAction(){
    if(this.props.opt && this.props.opt.closeMenu){
      this.props.actions.toggleMenu(false);
    }
  }
}

let SideNavRouter= withRouter(SideNavComponent);

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

function mapStateToProps(state: any, ownProps: any) {
  return {currentPath: state.currentPath}
}

export let SideNav = connect( mapStateToProps, mapDispatchToProps)(SideNavRouter);
