import * as React from "react";
import {formations, projects} from "../globals";
import {UnderlineTitle} from "../components/UnderlineTitle";
import {ProjectExcerpt} from "../components/ProjectExcerpt";
import {Line} from "../components/Line";
import {Formation} from "../components/Formation";
import {LinkWrapper} from "../components/LinkWrapper";

export class CV extends React.Component{
  render(){
    let projectsElements: Array<JSX.Element> = [];
    for (let key in projects){
      if(key !== 'home'){
        projectsElements.push(
          <LinkWrapper key={key} link={key}>
            <ProjectExcerpt  project={projects[key]} tag={key} />
          </LinkWrapper>
        )
      }
    }
    return (
      <div className="home">
        {/*<Line>*/}
          <div className="info-card" style={{display: 'none'}}>

          </div>
        {/*</Line>*/}
        <UnderlineTitle>
          Expériences
        </UnderlineTitle>
        <div className="excerpt__container">
          {projectsElements}
        </div>
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
      </div>
    )
  }
}