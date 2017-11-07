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
          Cette première expérience professionnelle, au sein de la start-up Wittyfit, à été très formatrice. J’ai appréhendé pour la première fois Angular, ainsi que toutes les technologies retenues par le Lead développeur, telles que coffeescript, less, gulp, ou encore createJS pour les animations et les graphiques pour rapidement être au rythme.
        </p>
        <p>
          3 jours sur 5 étaient effectués en télétravail, ce qui a été formateur en terme d’autonomie et de communication au sein du travail. Cette communication était renforcée par le statut de start-up de l’entreprise, qui nous incluaient dans les séances de brainstorming, et nous laissaient libres de proposer et discuter les différents aspects du projet.
        </p>
        <ul>
          <li>Première Expérience AngularJS</li>
          <li>Une partie du temps en télétravail, forgeant l'autonomie</li>
          <li>Rapidité dans l'autoformation (coffeescript, less, gulp, Angular, ...)</li>
          <li>L'esprit startup, entrainant la communication et le partage d'idées</li>
        </ul>
      </div>
    )
  }
}