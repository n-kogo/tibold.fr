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


function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
