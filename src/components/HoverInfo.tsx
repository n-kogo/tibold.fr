import * as React from "react";

interface HoverInfoProps{
  x: number;
  y: number;
  text: string;
}

export class HoverInfo extends React.Component<HoverInfoProps, any>{
  render(){
    return(
      <div
        className="hover-info"
        style={{
          left: this.props.x + 'px',
          top: this.props.y + 'px'
        }}
      >
        {this.props.text}
      </div>
    )
  }
}