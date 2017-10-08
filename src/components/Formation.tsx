import * as React from "react";
import {FormationContent} from "../globals";

interface FormationProps{
  formation: FormationContent
}
export class Formation extends React.Component<FormationProps, any>{
  render(){
    return(
      <div className={"formation"}>
        <div className="formation__info">
          <div className="formation__date">{this.props.formation.date}</div>
          <div className="formation__school">{this.props.formation.school}</div>
          <div className="formation__town">{this.props.formation.town}</div>
        </div>
        <div className="formation__title">
          {this.props.formation.title}
        </div>
      </div>
    )
  }
}