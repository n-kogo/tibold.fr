import * as React from "react";
import {IconList} from "./IconList";
import classNames = require("classnames");
import {Button} from "./Button";
import {Line} from "./Line";
import {MoreButton} from "./MoreButton";
import {timeline} from "animejs";
import {pContent} from "../globals";

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
        <h3>{pContent[this.props.tag].excerpt}</h3>
        <div className="project__excerpt">
          <p>{pContent[this.props.tag].description}
          </p>
        </div>
        <IconList project={this.props.tag} introOffset={this.props.introOffset} />
        <Line>
          <Button text="Accéder au Site" link={this.props.url} />
          <MoreButton />
        </Line>
      </div>
    )
  }
  componentDidMount(){
    this.introPage();
  }
  introPage(){
    let tl = timeline();
    console.log('intro')
    tl.add({
      targets: '.project__excerpt',
      translateY: -25,
      opacity: 0,
      duration: 1,
      offset: `+=${this.props.introOffset + 1000}`,
      easing: 'linear'
    });
    tl.add({
      targets: '.project h3',
      translateY: -30,
      opacity: 0,
      duration: 1,
      offset: `+=1`,
      easing: 'linear'
    });

    tl.add({
      targets: '.project h3',
      translateY: 0,
      opacity: 1,
      duration: 700,
      easing: 'easeInOutQuad'
    });
    tl.add({
      targets: '.project__excerpt',
      translateY: 0,
      opacity: 1,
      duration: 600,
      easing: 'easeInOutQuad',
      offset: '-=200'
    });
    tl.play();
  }
}