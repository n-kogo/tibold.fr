import * as React from "react";
import {timeline} from 'animejs';
export class HensWorld extends React.Component{
  name: string = "Hens World";
  render(){
    let n = this.name.split('');
    let renderName = n.map((letter, index)=>(
      letter !== ' ' ?
      <span key={index}>{letter}</span>
      :
      <span style={{marginLeft: '.5em'}} key={index}> </span>
    ));
    return (
      <div className="page hens-world">
        <h2>{renderName}</h2>
        <p>Site communautaire et interactif basé autour d'un univers fictif. J'ai réalisé l'ensemble du développement du site, en me basant sur une architecture Wordpress et AngularJS. La communauté comprend une centaine de membre, dont une trentaine poste régulièrement des créations venant compléter l'univers.
        </p>
      </div>
    )
  }
  componentDidMount(){
    let title = document.querySelector('.page h2');
    let letters = !!title ? title.getElementsByTagName('span') : [];
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
        translateX: -10,
        opacity: 1,
        duration: 500,
        easing: 'easeInOutQuad',
        offset: 50 + i * 100
      });
    }
    tl.play();
  }
}