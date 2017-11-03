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


export function random(max: number){
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
  timeout: number = 1300;
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
    let lastMaj = 0;
    for(let i = 0; i < letters.length; i++){
      let letter = letters[i];
      let isMaj = letter.innerHTML.match(/[A-Z]/);
      if(isMaj) lastMaj = i;
      let d = i - lastMaj;
      let obj: any = isMaj ?
        {
          targets: letter,
          translateX: [-500,0],
          filter: ['blur(10px)', "blur(0px)"],
          opacity: 1,
          duration: 700,
          easing: 'easeInQuad',
          offset: 50 + i * (45),
        }
        :
        {
          targets: letter,
          opacity: 1,
          translateX: {
            value: [-50 * d, 0]
          },
          duration: 700,
          offset: 750 + 50 * lastMaj + 10 * d
        };
      tl.add(obj);
      if(isMaj){
        for(var j = 0; j < 9 + random(8); j++){
          this.spawnParticle(letter, 710 +  50 + i * 45 + CST.SLIDER_TIMER);
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
      let r = random(18);
      particle.style.width = particle.style.height = r + 7  + 'px';
      anime({
        targets: particle,
        translateX: [0,  100 + random(95)],
        translateY: [0,  -random(35) - 15],
        scale: [1, .2],
        opacity: {
          value: [1.5, 0.1],
          easing: "linear"
        },
        duration: 1200,
        easing: 'easeOutQuart',
        complete: ()=>{
          particle.parentElement.removeChild(particle);
        },
      })
    }, timeout);
  }
}