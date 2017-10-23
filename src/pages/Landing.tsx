import * as React from "react";
import {Logo} from "../components/Logo";
import {SideNav} from "../components/SideNav";
import {Link} from "react-router-dom";


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
          <Link to={'/home'} className="landing__button" onClick={()=>this.navTo('home')}>
            V
          </Link>
          <SideNav />
        </div>
      </div>
    )
  }
  navTo(path: string){

  }
}