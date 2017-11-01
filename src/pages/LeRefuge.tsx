import * as React from "react";
import {Project} from "../components/Project";
import {timeline} from "animejs";
import {CST} from "../globals";
import * as anime from "animejs";

export class LeRefuge extends React.Component{
  name: string = "Le Refuge des Souvenirs";
  tag: string = 'le-refuge-des-souvenirs';
  link: string = 'http://le-refuge-des-souvenirs.com';
  timeout: number = 1750;
  render(){
    let n = this.name.split('');
    let renderName = n.map((letter, index)=>(
      letter !== ' ' ?
        <tspan key={index}>{letter}</tspan>
        :
        <tspan style={{marginLeft: '.5em'}} key={index}> </tspan>
    ));
    return (
      <Project
        tag={this.tag}
        url={this.link}
        introOffset={this.timeout}
      >
        <svg width={"100%"} style={{height: "auto", display:"none"}} >
          <defs></defs>
          <text x="0" y="50" >
            {renderName}
          </text>
        </svg>
        <h2>{this.name}</h2>
      </Project>
    )
  }

  componentDidMount(){
    let title : HTMLElement = document.querySelector('.project h2') as any;
    let svgTitle: HTMLElement = document.querySelector('.project text') as any;
    let fs = getComputedStyle(title).fontSize;
    let height = parseInt(fs.replace('px', ''));
    svgTitle.style.fontSize = fs;
    svgTitle.parentElement.style.height = (height * 1.3).toFixed();
    title.style.display = "none";
    svgTitle.setAttribute('y', svgTitle.style.fontSize);
    svgTitle.parentElement.style.display = "block";
    console.log('svg title', svgTitle);
    let letters = svgTitle.getElementsByTagName('tspan');
    let tl = timeline();
    for(let i = 0; i < letters.length; i++){
      let letter = letters[i];
      letter.style.fill = 'rgba(0, 0, 0, 0)';
      letter.style.stroke = '#333';
      letter.style.strokeDashoffset = '400';
      letter.style.strokeDasharray = '400 400';
      tl.add({
        targets: letter,
        duration: 1,
        offset: 0,
        easing: 'easeInOutQuad',
      });
      tl.add({
        opacity: 1,
        targets: letter,
        strokeDashoffset: [400, 0],
        duration: 400,
        easing: 'easeInQuad',
        offset: 30 + i * (170 - i * 4),
        complete: ()=>{
          letter.style.fill= "#333";
        }
      });
    }
    tl.pause();
    setTimeout(tl.play, CST.SLIDER_TIMER);
  }

}