import * as React from "react";
import {Project} from "../components/Project";
import {timeline} from "animejs";
import {CST} from "../globals";

export class EternityRun extends React.Component{
  name: string = "One Eternity to Run";
  tag: string = 'eternity-run';
  link: string = 'http://eternity.hens-world.com';
  timeout: number = 1200;
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
        translateX: 200,
        opacity: 0,
        duration: 1,
        offset: 0,
        easing: 'easeInOutQuad',
      });
      tl.add({
        targets: letter,
        translateX: 0,
        opacity: 1,
        duration: 500,
        easing: 'easeInOutQuad',
        offset: 50 + i * 100
      });
    }
    tl.pause();
    setTimeout(tl.play, CST.SLIDER_TIMER);
  }

}