import * as React from "react";
import {timeline} from 'animejs';
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
          <div className="hens-world__shapes">
            <div className="hw-shape shape-1"></div>
            <div className="hw-shape shape-2"></div>
          </div>
          <svg style={{position: 'absolute'}}>
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
        </h2>
      </Project>
    )
  }

  componentDidMount(){
    let title = document.querySelector('.project h2');
    let letters = title.getElementsByTagName('span');
    let titleBox = document.querySelector('.project .fit-text').getBoundingClientRect();
    let tl = timeline({
      loop: true
    });
    tl.add({
      targets: '.hw-shape',
      width: titleBox.height,
      height: titleBox.height,
      marginLeft: -titleBox.height  / 2,
      translateX: 25
    });
    tl.add({
      targets: '.shape-2',
      translateX: [25, letters[letters.length - 1].offsetLeft],
      easing: "easeInOutQuad",
      duration: 3000,
      offset: "-=150"
    });
    tl.add({
      targets: Array.from(letters),
      opacity: 1,
      color: {
        value: ['rgb(17, 171, 166)', "#333"],
        duration: 700,
      },
      duration: 150,
      easing: 'linear',
      offset: "-=720",
      delay: (elt: any, i:number)=>{
        return i * 67
      },
    })
      .add({
        targets: '.hw-shape',
        opacity: 0,
        duration: 300,
        easing: 'linear'
      });
    tl.pause();
    setTimeout(tl.play, CST.SLIDER_TIMER);
  }
}


function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
