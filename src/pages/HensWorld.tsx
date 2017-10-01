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

export class HensWorld extends React.Component<any, any>{
  name: string = "Hens World";
  tag: string = 'hens-world';
  link: string = 'http://hens-world.fr';
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
      <Project tag={this.tag} url={this.link} introOffset={this.timeout}>
        <h2>{renderName}</h2>
        <h3>Plateforme Web sur la création et le jeu de rôle</h3>
        <div className="project__excerpt">
          <p>Site communautaire et interactif basé autour d'un univers fictif. Le site permet de poster des créations de tous types, naviguer dans différents villages en vue isométrique pour découvrir l’univers, créer son personnage, faire des jeux de rôles avec d’autres joueurs, etc.
          </p>
        </div>
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
    setTimeout(tl.play, this.timeout);
    this.introPage();
  }
  introPage(){
    let tl = timeline();
    console.log('intro')
    tl.add({
      targets: '.project__excerpt',
      translateY: -25,
      opacity: 0,
      duration: 1,
      offset: `+=${this.timeout + 1000}`,
      easing: 'linear'
    });
    tl.add({
      targets: '.project h3',
      translateY: -30,
      opacity: 0,
      duration: 1,
      offset: `+=1`,
      easing: 'linear'
    });

    tl.add({
      targets: '.project h3',
      translateY: 0,
      opacity: 1,
      duration: 700,
      easing: 'easeInOutQuad'
    });
    tl.add({
      targets: '.project__excerpt',
      translateY: 0,
      opacity: 1,
      duration: 600,
      easing: 'easeInOutQuad',
      offset: '-=200'
    });

    tl.play();
  }
}


function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
