import {UnderlineTitle} from "../UnderlineTitle";
import * as React from "react";


export class RefugeContent extends React.Component<any, any>{
  render(){
    return (
      <div className="overlay-content">
        <UnderlineTitle>
          Le Refuge des Souvenirs
        </UnderlineTitle>
        <p>
          Projet de fin d’étude de Lyne Hehlen, j’ai pu collaborer avec elle pour développer un concept de film interactif. Le refuge des souvenirs ne s’appuie sur aucune librairie pour la gestion des vidéos, tant les besoins étaient spécifiques. J’ai dû explorer en profondeur le fonctionnement des vidéos sur les différents navigateurs pour s’assurer de la synchronisation de 3 vidéos en parallèle.
        </p>
        <p>
          Le projet a aussi été l’occasion de peaufiner en détail l’expérience utilisateur, dans la manière de l’introduire au concept, mais surtout dans la facilité qu’aura l’utilisateur à se repérer dans l’histoire. Cela a demandé beaucoup d’ajustements et de tests pour comprendre les spécificités de ce mode d’interaction. C’était spécialement plaisant de travailler sur de nouvelles manières d’interagir avec l’utilisateur.
        </p>
        <p>
          Pour le reste du site (pages de présentation, statistiques en fin de vidéo), j’ai opté pour l’utilisation de React, afin de me familiariser avec ce dernier.
        </p>
      </div>
    )
  }
}