import * as React from "react";
import {formations, projects} from "../globals";
import {UnderlineTitle} from "../components/UnderlineTitle";
import {ProjectExcerpt} from "../components/ProjectExcerpt";
import {Line} from "../components/Line";
import {Formation} from "../components/Formation";

export class CV extends React.Component{
  render(){
    let projectsElements: Array<JSX.Element> = [];
    for (let key in projects){
      projectsElements.push(
        <ProjectExcerpt key={key} project={projects[key]} tag={key} />
      )
    }
    return (
      <div className="home">
        <Line>
          <div style={{flex: '1 1 auto'}}>
            <UnderlineTitle>
              Formations
            </UnderlineTitle>
            {formations.map((formation, index)=>{
              return(
                <Formation formation={formation} key={index} />
              )
            })}
          </div>
          <div className="info-card">
            <img className="avatar" src="../assets/avatar.jpg" alt=""/>
            <p>Thibaut</p>
            <p>CARCENAC</p>
            <p>06.09.66.26.76</p>
            <a className="mail">thibaut.carcenac@gmail.com</a>
            <p>Charente (16)</p>
          </div>
        </Line>

        <UnderlineTitle>
          Expériences
        </UnderlineTitle>
        {projectsElements}
      </div>
    )
  }
}