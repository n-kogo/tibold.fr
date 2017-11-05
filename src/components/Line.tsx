import * as React from "react";
import * as classNames from "classnames";

interface LineProps{
  spaceAround?: boolean;
  noMargin?: boolean;
  boxed?: boolean;
  forceLine?: boolean;
}

export class Line extends React.Component<LineProps, any>{
  render(){
    return (
      <div className={classNames("line", {
        "space-around": this.props.spaceAround,
        "no-margin": this.props.noMargin,
        "boxed": this.props.boxed,
        "force-line": this.props.forceLine
      })}>
        {
          this.props.children
        }
      </div>
    )
  }
}