import * as React from "react";
import {Project} from "../components/Project";
import {timeline} from "animejs";
import {CST} from "../globals";
import * as anime from "animejs";

let colors = [
  "#838066",
  "#d6fff8",
  "#79B",
  "#ccacaa"];


function random(max: number){
  return Math.floor(Math.random() * max);
}

interface Particle {
  dom: HTMLElement,
  spawnTime: number,
  v: {
    x: number,
    y: number
  }
}

export class EternityRun extends React.Component{
  name: string = "One Eternity to Run";
  tag: string = 'eternity-run';
  link: string = 'http://eternity.hens-world.com';
  timeout: number = 1200;
  particles: Array<Particle>;
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
        filter: ['blur(10px)', "blur(0px)"],
        translateX: [-500,0],
        opacity: 1,
        duration: 700,
        easing: 'easeInQuad',
        offset: 50 + i * (50)
      });
      if(letter.innerHTML.match(/[A-Z]/)){
        for(var j = 0; j < 5 + random(10); j++){
          this.spawnParticle(letter, 700 +  50 + i * 50 + CST.SLIDER_TIMER);
        }
      }
    }
    tl.pause();
    setTimeout(tl.play, CST.SLIDER_TIMER);
  }
  spawnParticle(elt: HTMLElement, timeout: number){
    setTimeout(()=>{

      let rect = elt.getBoundingClientRect();
      let particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = random(5) + -2.5 + rect.left  + 'px';
      particle.style.top = random(3) - 1.5 + rect.top + 40 + 'px';
      particle.style.backgroundColor = colors[random(colors.length)]
      document.querySelector('.main-wrapper').appendChild(particle);
      particle.style.opacity = 0 + '';
      let r = random(9);
      anime({
        targets: particle,
        translateX: [0,  120 + random(80)],
        translateY: [0,  -random(35) - 15],
        width: [r + 8, 3],
        height: [r + 8, 3],
        easing: 'easeOutExpo',
        opacity: {
          value: [2, 0],
          easing: "linear"
        },
        duration: 1300,
        complete: ()=>{
          particle.parentElement.removeChild(particle);
        },
      })
    }, timeout);
  }
}