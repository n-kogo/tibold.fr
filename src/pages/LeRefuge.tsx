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
        <tspan key={index}> </tspan>
    ));
    return (
      <Project
        tag={this.tag}
        url={this.link}
        introOffset={this.timeout}
      >
        <svg width={"100%"} style={{height: "1.3em"}}>
          <text y={50} x={0}>
            {renderName}
          </text>
        </svg>
      </Project>
    )
  }

  resizeTitle(){
    let svgTitle: HTMLElement = document.querySelector('.project text') as any;
    let currentFontSize: number = parseFloat(getComputedStyle(svgTitle).fontSize.replace('px', ''));
    while(svgTitle.clientWidth < svgTitle.parentElement.clientWidth - currentFontSize * 1.8){
      svgTitle.parentElement.style.fontSize = currentFontSize++ + 'px';
    }
    svgTitle.setAttribute('y', getComputedStyle(svgTitle).fontSize);
  }

  componentDidMount(){
    let svgTitle: HTMLElement = document.querySelector('.project text') as any;
    this.resizeTitle();
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
    window.addEventListener('resize', ()=>{
      this.resizeTitle();
    });
  }

}