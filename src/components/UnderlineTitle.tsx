import * as React from "react";

export class UnderlineTitle extends React.Component{
  render(){
    return (
      <div className="underline-title">
        <h2>
          {this.props.children}
        </h2>
        <div className="underline-title__line" />
        <svg viewBox="0 0 50 10" width="100">
          <path d="M10,0 L50,0 L40, 10 L0, 10 Z" />
        </svg>
      </div>
    );
  }
}