import * as React from "react";
import {Project} from "../components/Project";
import {CST} from "../globals";
import {timeline} from "animejs";

export class TheLastFrontier extends React.Component{
  name: string = "The Last Frontier";
  tag: string = 'the-last-frontier';
  link: string = 'http://beta.thelastfrontiergame.com';
  timeout: number = 900;
  render(){
    let n = this.name.split('');
    let renderName = n.map((letter, index)=>(
      letter !== ' ' ?
        <span key={index}>{letter}</span>
        :
        <span style={{marginLeft: '.5em'}} key={index}> </span>
    ));
    return (
      <Project
        tag={this.tag}
        url={this.link}
        introOffset={this.timeout}
      >
        <h2>{renderName}</h2>
      </Project>
    )
  }
  componentDidMount(){
    let title = document.querySelector('.project h2');
    let letters = title.getElementsByTagName('span');
    let tl = timeline();
    for(let i = 0; i < letters.length; i++){
      let letter = letters[i];
      tl.add({
        targets: letter,
        translateX: 50,
        translateY: -400,
        opacity: 0,
        duration: 1,
        offset: 0,
        easing: 'easeInOutQuad',
      });
      tl.add({
        targets: letter,
        translateX: {
          value: 0,
          duration: 120,
          easing: 'linear'
        },
        translateY: {
          value: [-300, 0],
          elasticity: 5,
          duration: 180,
          easing: 'easeInQuad'
        },
        opacity: {
          value: 1,
          delay: 140,
          duration: 300
        },
        offset: 50 + i * 55
      });
    }
    tl.pause();
    setTimeout(tl.play, CST.SLIDER_TIMER);
  }
}