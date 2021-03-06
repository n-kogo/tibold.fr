import * as React from "react";
import { timeline} from 'animejs';
import * as anime from 'animejs';
import {IconList} from "../components/IconList";
import {Button} from "../components/Button";
import {Line} from "../components/Line";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import actions from "../store/actions";
import {MoreButton} from "../components/MoreButton";
import classNames = require("classnames");
import {Project} from "../components/Project";
import {CST, pContent} from "../globals";
import {random} from "./EternityRun";


export class HensWorld extends React.Component<any, any>{
  name: string = "Hens World";
  tag: string = 'hens-world';
  link: string = 'http://hens-world.fr';
  timeout: number = 600;
  render(){
    let n = this.name.split('');
    let renderName = n.map((letter, index)=>(
      letter !== ' ' ?
      <span key={index}>{letter}</span>
      :
      <span style={{marginLeft: '.5em'}} key={index}> </span>
    ));
    return (
      <Project tag={this.tag} url={this.link} introOffset={this.timeout + CST.SLIDER_TIMER}>
        <h2>{renderName}
          <div className="ball-1 ball"></div>
          <div className="ball-2 ball"></div>
        </h2>

      </Project>
    )
  }

  componentDidMount(){
    let title = document.querySelector('.project h2');
    let letters = title.getElementsByTagName('span');
    let titleBox = document.querySelector('.project .fit-text').getBoundingClientRect();
    let ball1 = document.querySelector('.ball-1') as HTMLElement;
    let ball2 = document.querySelector('.ball-2') as HTMLElement;
    ball1.style.left = letters[3].offsetLeft / 2  + 'px';
    ball2.style.left = (letters[letters.length - 1].offsetLeft - letters[5].offsetLeft) / 2  + letters[5].offsetLeft + 'px';

    let tl = timeline();
    tl.add({
      targets: ball1,
      opacity: {
        value: [0, 1],
        duration: 50,
        easing: 'linear'
      },
      translateX: ['-50%', '-50%'],
      scaleX: [0.1, 1.1],
      scaleY: [0.1, .9],
      duration: 400,
      easing: 'easeOutExpo',
      complete: ()=>{
        setTimeout(()=>{
          for(let i = 0; i < 10 + random(5); i++){
            this.spawnParticle(ball1);
          }
          ball1.parentElement.removeChild(ball1);
        }, 50)

      }
    });
    tl.add({
      targets: ball2,
      offset: "-=300",
      opacity: {
        value: [0, 1],
        duration: 50,
        easing: 'linear'
      },
      translateX: ['-50%', '-50%'],
      scaleX: [0.1, 1.1],
      scaleY: [0.1, .9],
      easing: 'easeOutExpo',
      duration: 400,
      complete: ()=>{
        setTimeout(()=>{
          for(let i = 0; i < 10 + random(5); i++){
            this.spawnParticle(ball2);
          }
          ball2.parentElement.removeChild(ball2);
        }, 50)
      }
    });
    tl.add({
      targets: Array.from(letters).filter((x, i)=>(i < 4)),
      opacity: [0, 1],
      duration: 150,
      translateX: (elt: any, i: number)=> [i * -10 + 15, 0],
      offset: "-=20",
      color: {
        value: ["rgb(232, 132, 0)" , "#333"],
        delay: 350,
        easing: 'linear',
        duration: 1000,
      },
      translateY: [10, 0]
    });
    tl.add({
      targets: Array.from(letters).filter((x, i)=>(i > 4)),
      opacity: [0, 1],
      duration: 150,
      translateX: (elt: any, i: number)=> [i * -10 + 15, 0],
      offset: "-=1150",
      color: {
        value: ["rgb(17, 171, 166)" , "#333"],
        delay: 350,
        duration: 1000,
        easing: 'linear',
      },
      translateY: [10, 0],
    });
    tl.pause();
    setTimeout(tl.play, CST.SLIDER_TIMER);
  }

  spawnParticle(elt: HTMLElement){
    let rect = elt.getBoundingClientRect();
    let particle = document.createElement('div');
    particle.classList.add('particle');
    let direction = random(rect.width / 2) - rect.width / 4;
    let yVel =random(rect.height / 2) - rect.height / 6;
    particle.style.left =  direction + rect.left  + rect.width / 2 + 'px';
    particle.style.top = yVel  + rect.top + rect.height / 2 + 'px';
    particle.style.width = particle.style.height = random(15) + 7 + 'px';
    particle.style.backgroundColor = (getComputedStyle(elt) as any)['background-color'];
    document.querySelector('.main-wrapper').appendChild(particle);
    anime({
      targets: particle,
      translateX:[0, direction * 2.9],
      translateY: [0, -yVel * 6],
      easing: 'easeOutExpo',
      duration: 400,
      scale: {
        value: [1.2, .7],
        easing: 'easeOutQuart'
      },
      opacity: {
        value: [1, 0],
        delay: 450,
        duration: 900,
        easing: 'linear'
      },
      marginTop: {
        value: [0, 4],
        delay: 370,
        duration: 800,
        easing: 'easeInQuad'
      },
      complete: ()=>{
        particle.parentElement.removeChild(particle);
      },
    });
  }
}


function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
