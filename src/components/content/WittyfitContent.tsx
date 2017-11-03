import {UnderlineTitle} from "../UnderlineTitle";
import * as React from "react";


export class WittyfitContent extends React.Component<any, any>{
  render(){
    return (
      <div className="overlay-content">
        <UnderlineTitle>
          Wittyfit
        </UnderlineTitle>
        <p>
          Cette première expérience professionnelle à été très formatrice. J’ai appréhendé pour la première fois Angular, ainsi que toutes les technologies retenues par le Lead développeur, telles que coffeescript, less, gulp, ou encore createJS pour les animations et les graphiques pour rapidement être au rythme.
        </p>
        <p>
          3 jours sur 5 étaient effectués en télétravail, ce qui a été formateur en terme d’autonomie et communication au sein du travail. Cette communication était renforcée par le statut de start-up de l’entreprise, qui nous incluaient dans les séances de brainstorming, et nous laissaient libre de proposer et discuter les différents aspects du projet.
        </p>
      </div>
    )
  }
}