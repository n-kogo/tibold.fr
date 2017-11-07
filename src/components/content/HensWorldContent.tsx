import {UnderlineTitle} from "../UnderlineTitle";
import * as React from "react";


export class HensWorldContent extends React.Component<any, any>{
  render(){
    return (
      <div className="overlay-content">
        <UnderlineTitle>
          Hens World
        </UnderlineTitle>
        <p>
          “Hens World” est un projet associatif, développé depuis 2015 et initié entre amis. Le site compte aujourd’hui plus de 700 membres, avec une activité régulière de partage de création et de parties de jeu de rôles. Je gère la partie développement du site, et m’assure que l’expérience des membres est bonne. Ce projet m’a appris à toujours être disponible et réactif aux problèmes rencontrés par les utilisateurs. La plupart des décisions passent ainsi par la communication avec les membres.
        </p>
        <p>
          Le projet, initialement réalisé sous Wordpress, m’a permis d’apprendre en profondeur le fonctionnement du CMS tant les besoins de ce projet sont spécifiques.
        </p>
        <p>
          La partie back-end s’est vue complémentée d’un serveur NodeJS qui m’a permis de facilement gérer la communication temps réel entre les utilisateurs. C’était ma première expérience avec NodeJS, qui est vite devenue ma technologie de prédilection pour la mise en place rapide de fonctionnalités côté serveur.
        </p>
        <ul>
          <li>Un projet associatif, impliqué depuis plusieurs années</li>
          <li>Gestion de projet, connaissance du produit en tant que service</li>
          <li>Connaissance approfondie de Wordpress</li>
          <li>Un apprentissage NodeJS en autodidacte pour les besoins du projet</li>
        </ul>
      </div>
    )
  }
}