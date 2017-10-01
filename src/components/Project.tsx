import * as React from "react";
import {IconList} from "./IconList";
import classNames = require("classnames");
import {Button} from "./Button";
import {Line} from "./Line";
import {MoreButton} from "./MoreButton";
import {timeline} from "animejs";

interface ProjectProps{
  tag: string;
  url: string;
  introOffset: number;
}

export class Project extends React.Component<ProjectProps, any>{
  render(){
    return (
      <div className={classNames('project', this.props.tag)}>
        {this.props.children}
        <IconList project={this.props.tag} introOffset={this.props.introOffset}></IconList>
        <Line>
          <Button text="Accéder au Site" link={this.props.url}></Button>
          <MoreButton></MoreButton>
        </Line>
      </div>
    )
  }
}