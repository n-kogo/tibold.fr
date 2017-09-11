import * as React from "react";
import {Link, BrowserRouter} from 'react-router-dom';
export class PageNav extends React.Component{
  routes: Array<string> = ['/', 'hens-world', 'le-refuge-des-souvenirs', 'the-last-frontier', 'one-eternity-to-run', 'wittyfit'];
  state: any = {
    position: 0
  };
  constructor(props){
    super(props);
  }
  render(){
    let angle = 15 + (this.state.position) * 180 / this.routes.length
    let arrowStyle = {
      transform: `rotate(${angle}deg)`
    };
    let currentRoute = this.routes[this.state.position >= this.routes.length ? 0 : this.state.position + 1];
    return (
      <Link className="page-nav" to={'/' + currentRoute} onClick={()=> this.updateNav()}>
        <div className="page-nav__arrow" style={arrowStyle}></div>
      </Link>
    );
  }
  updateNav(){
    console.log('updating fck page nav')
    let p = this.state.position + 1;
    if(p >= this.routes.length) p = 0;
    this.setState({
      position: p
    })
  }

}