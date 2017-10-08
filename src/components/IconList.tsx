import * as React from "react";
import {projects, icons, labels} from "../globals";
import {MouseEvent} from "react";
import classNames = require("classnames");
import {timeline} from "animejs";
import {Icon} from "./Icon";

interface IconListProps{
  project: string;
  introOffset: number;
}

interface IconListState{
  hovered: string | null;
  mouse: {x: number, y: number};
}

export class IconList extends  React.Component<IconListProps, IconListState>{
  constructor(props: IconListProps){
    super(props);
    this.state = {
      hovered: null,
      mouse: {
        x: 0,
        y: 0
      }
    }
  }
  render(){
    let hoverClass = "icon-list__hover " + (this.state.hovered ? "" : "hidden")
    let hoverPos = {
      left: this.state.mouse.x,
      top: this.state.mouse.y
    };
    return (
      <div className="icon-list">
        <div className={hoverClass} style={hoverPos}>{labels[this.state.hovered]}</div>
        {
         projects[this.props.project].techs.map((tech, idx)=>{
           return (
             <Icon key={idx} tech={tech} />
         )
         })
        }
      </div>
    )
  }
  componentDidMount(){
    this.introAnim();
  }

  introAnim(){
    let icons = document.querySelectorAll('.icon-list .icon');
    console.log('intro anim', icons)
    let tl = timeline({
      autoplay: false
    });
    tl.add({
      targets: null,
      duration: 150,
      offset: '+=1'
    });
    icons.forEach((icon)=>{
      tl.add({
        targets: icon,
        opacity: {
          value: 1,
          easing: 'linear',
        },
        scale: {
          value: 1,
        },
        duration: 250,
        offset: '-=150'
      });
    });

    setTimeout(()=>tl.play(), this.props.introOffset + 1800);
  }
}