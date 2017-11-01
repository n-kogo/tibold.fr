import * as React from "react";
import {Logo} from "../components/Logo";
import {SideNav} from "../components/SideNav";
import {Link} from "react-router-dom";
import {LinkWrapper} from "../components/LinkWrapper";


export class Landing extends React.Component{
  render(){
    return (
      <div className="landing" >
        <div className="landing__wrapper" style={{padding: '15px 15px 150px 15px'}}>
          <div>
            <Logo fontSize={70} />
            <div className="landing__presentation">
              <p>
                Thibaut CARCENAC, <br />
                Web Developer, Interactive Designer
              </p>
            </div>
          </div>
          <LinkWrapper link={'/home'}>
            <div className="landing__button">
              V
            </div>
          </LinkWrapper>
          <SideNav />
        </div>
      </div>
    )
  }
  navTo(path: string){

  }
}