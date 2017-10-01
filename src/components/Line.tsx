import * as React from "react";

export class Line extends React.Component{
  render(){
    return (
      <div className="line">
        {
          this.props.children
        }
      </div>
    )
  }
}