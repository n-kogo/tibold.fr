import * as React from "react";
import {AppState, HoverInfoDescriptor} from "../store/createStore";
import {connect} from "react-redux";

interface HoverBubbleProps {
  info: HoverInfoDescriptor;
}

class HoverBubbleComponent extends React.Component<HoverBubbleProps, any>{
  render(){
    console.log('render info', this.props.info)
    if(!this.props.info){
      return (
        <div className="hover-bubble disabled"></div>
      )
    }
    return (
      <div className="hover-bubble" style={{left: this.props.info.x + 'px', top: this.props.info.y + 'px'}}>
        {this.props.info.text}
      </div>
    )
  }
}

function mapStateToProps(state: AppState, ownProps: any) {
  return {info: state.hoverInfo}
}


export let HoverBubble = connect(mapStateToProps)(HoverBubbleComponent);
