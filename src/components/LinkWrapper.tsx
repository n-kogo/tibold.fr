import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import actions, {actionTypings} from "../store/actions";


interface LinkWrapperProps{
  link: string;
  actions: actionTypings;
  external?: boolean;
}

class LinkWrapperComponent extends React.Component<LinkWrapperProps, any>{
  render(){
    return(
      this.props.external ?
        <a href={this.props.link}  target="_blank" rel="noopener noreferrer">{this.props.children}</a>
        :
        <Link to={this.props.link} onClick={()=>this.navigateTo(this.props.link)}>{this.props.children}</Link>
    )
  }
  navigateTo(link: string){
    this.props.actions.changePage(link);
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export let LinkWrapper = connect(null, mapDispatchToProps)(LinkWrapperComponent);