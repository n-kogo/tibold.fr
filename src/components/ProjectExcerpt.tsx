import * as React from "react";
import {Project} from "./Project";
import {PageDescriptor, pContent, projects} from "../globals";
import {Icon} from "./Icon";

interface ProjectExcerptProps{
  project: PageDescriptor,
  tag: string
}

export class ProjectExcerpt extends React.Component<ProjectExcerptProps, any>{
  render(){
    return (
      <div className="project-excerpt">
        <div className="project-excerpt__image" style={{backgroundImage: `url(${this.props.project.images[0]})`}}>
        </div>
        <div className="project-excerpt__content">
          <h2>{this.props.project.name}</h2>
          <p className="project-excerpt__roles">
            {
              pContent[this.props.tag].role.map((role)=>{
                return <span key={role}>{role}</span>;
              })
            }
            </p>
          <p className="project-excerpt__date">{pContent[this.props.tag].date}</p>

        </div>
        <div className="project-excerpt__icons">
          {this.props.project.techs.filter((tech, idx)=>idx < 3).map((tech, idx)=>{
            return <Icon key={idx} tech={tech} />
          })}
        </div>
        {/*<svg  viewBox="0 0 1 1" preserveAspectRatio="none">*/}
        {/*<path id="XMLID_2_" d="M0,0L 0.25, 0 C0.25,0 0.35,0.1 0.35,0.45 C0.35,.8 0.22,.8 0.2,1 L0,1 Z" style={{filter:"url(#dropshadow)"}}/>*/}
        {/*</svg>*/}
      </div>
    )
  }
}