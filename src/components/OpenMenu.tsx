import * as React from "react";
import {bindActionCreators} from "redux";
import actions from "../store/actions";
import {connect} from "react-redux";
import {default_state} from "../store/createStore";
import * as anime from "animejs";

export class OpenMenuComponent extends React.Component<any, any>{
  previousState: boolean;
  render(){
    return (
      <div
        className="open-menu"
        onClick={()=>this.openMenu()}
      >
        <svg viewBox="0 0 35 30" width="40">
          <path d="M5,5 L30,5" />
          <path d="M5,15 L30,15" />
          <path d="M5,25 L30,25" />
        </svg>
      </div>
    )
  }
  componentDidMount(){
    this.componentDidUpdate()
  }
  componentDidUpdate(){
    if(this.previousState !== this.props.open){
      if(this.props.open){
        anime({
          targets: '.open-menu path:nth-child(1)',
          rotate: -45,
          easing: 'easeInOutQuad',
          d: "M5, 5, L34, 5",
          duration: 350
        });
        anime({
          targets: '.open-menu path:nth-child(2)',
          translateX: '40',
          easing: 'easeInOutQuad',
          duration: 400,
          d: "M30, 15, L30, 15",
        });
        anime({
          targets: '.open-menu path:nth-child(3)',
          rotate: 45,
          d: "M5, 25, L34, 25",
          easing: 'easeInOutQuad',
          duration: 350
        });
      }
      else {
        anime({
          targets: '.open-menu path:nth-child(1)',
          rotate: 0,
          easing: 'easeInOutQuad',
          d: "M5,5 L30, 5",
          duration: 250
        });
        anime({
          targets: '.open-menu path:nth-child(2)',
          translateX: '0',
          easing: 'easeInOutQuad',
          duration: 300,
          d: "M5, 15, L30, 15",
        });

        anime({
          targets: '.open-menu path:nth-child(3)',
          rotate: 0,
          d: "M5, 25, L30, 25",
          easing: 'easeInOutQuad',
          duration: 250
        });
      }
    }
    this.previousState = this.props.open;
  }
  openMenu(){
    this.props.actions.toggleMenu(true)
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


function mapStateToProps(state = default_state, ownProps: any) {
  return {open: state.menuOpen}
}

export const OpenMenu = connect(mapStateToProps, mapDispatchToProps)(OpenMenuComponent);