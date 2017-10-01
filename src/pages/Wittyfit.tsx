import * as React from "react";
import {timeline} from "animejs";
import {Project} from "../components/Project";

export class Wittyfit extends React.Component{
  name: string = "Wittyfit";
  tag: string = 'wittyfit';
  link: string = 'http://wittyfit.com';
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
        <h3>Outil pour la qualité de vie au travail pour les grandes entreprises</h3>
        <div className="project__excerpt">
          <p>
            Wittyfit est une application à destination des grandes entreprises pour améliorer la qualité de vie au travail de ses employés.
            <br/>
            L'outil comprend des questionnaires, des statistiques pour les chefs d'équipes, un board pour proposer des idées anonymement, des formations pour les employés, etc..
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
    tl.add({
      targets: '.project__excerpt',
      translateY: -40,
      opacity: 0,
      duration: 1,
      offset: `+=${this.timeout + 1000}`,
      easing: 'linear'
    });
    tl.add({
      targets: '.project__excerpt',
      translateY: 0,
      opacity: 1,
      duration: 1000,
      easing: 'easeInOutQuad'
    });
  }
}

