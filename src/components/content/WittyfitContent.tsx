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
          J'ai été engagé en tant que Développeur Web Front-End Junior.
          Ma mission était l'intégration de différents modules de l'application.
        </p>
        <p>Première expérience avec Angular, j'ai aussi eu l'occasion d'apprendre l'utilisation de l'API Canvas avec la librairie EaselJS</p>
      </div>
    )
  }
}