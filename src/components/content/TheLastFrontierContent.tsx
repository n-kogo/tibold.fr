import {UnderlineTitle} from "../UnderlineTitle";
import * as React from "react";


export class TheLastFrontierContent extends React.Component<any, any>{
  render(){
    return (
      <div className="overlay-content">
        <UnderlineTitle>
          The Last Frontier
        </UnderlineTitle>
        <p>
          Le développement d’une companion App m’a permi d’interagir avec des designer et programmeurs jeux vidéos, ce qui m’a fait beaucoup évoluer dans mon approche du développement.  J’ai pu discuter  et conseiller autour de l’expérience utilisateur dans la companion app mais aussi sur le jeu en lui même avec les designers, discuter des spécificités d’implémentation de fonctionnalités communes entre le jeu et la companion app, notamment dans la structure des bases de données.
        </p>
        <p>
          Mon poste de développeur Full Stack m’a demandé une grande adaptabilité et autonomie pour répondre à tous les besoins. Cela a enclenché une grande part de veille technologique pour répondre à ces besoins, et mettre en place une structure viable pour une grande production.
        </p>
        <ul>
          <li>Développer une companion App, en collaboration avec les domaines du jeu vidéo</li>
          <li>Une expérience full stack, où j'étais en charge du pôle Web</li>
          <li>Une veille technologique poussée, pour proposer un meilleur produit</li>
        </ul>
      </div>
    )
  }
}