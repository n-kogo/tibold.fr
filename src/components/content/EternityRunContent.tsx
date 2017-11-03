import {UnderlineTitle} from "../UnderlineTitle";
import * as React from "react";


export class EternityRunContent extends React.Component<any, any>{
  render(){
    return (
      <div className="overlay-content">
        <UnderlineTitle>
          One Eternity to Run
        </UnderlineTitle>
        <p>
          Loin d’être la première game Jam à laquelle j’ai participé, One Eternity to run est cependant le premier jeu que j’ai réalisé à l’aide d’un moteur de jeu Web, ici Phaser. De plus le challenge principal que je m’étais imposé était d’appréhender en un temps très court le jeu en ligne en temps réel. Le résultat est très imparfait, mais très formateur sur les mécaniques du jeu en ligne.
        </p>
      </div>
    )
  }
}