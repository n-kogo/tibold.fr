import * as React from "react";
import {Project} from "../components/Project";

export class TheLastFrontier extends React.Component{
  name: string = "The Last Frontier";
  tag: string = 'the-last-frontier';
  link: string = 'http://beta.thelastfrontiergame.com';
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
}