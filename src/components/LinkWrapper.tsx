import * as React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import actions, {actionTypings} from "../store/actions";


interface LinkWrapperProps{
  link: string;
  actions: actionTypings;
}

class LinkWrapperComponent extends React.Component<LinkWrapperProps, any>{
  render(){
    return(
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