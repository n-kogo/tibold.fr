import * as React from "react";
import {timeline} from "animejs";

export class Wittyfit extends React.Component{
  timeout: number = 1200;
  render(){
    return (
      <div className="project wittyfit">
        <h2>Wittyfit</h2>
        <div className="project__excerpt">
          <p>Réalisation d'un outil pour la gestion du  bien être au travail pour les grandes entreprise. J'ai travaillé sur le projet en tant que développeur Front End Jr. dans une équipe de 3 développeurs. L'outil permet de récupérer les données anonymement de chaque employé, le renvoyant vers des formations concernant ses problèmes, mais aussi donne des ensembles de données aux managers pouvant agir en conséquence face à certains problèmes (manque de formation etc...).</p>
        </div>
      </div>
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

