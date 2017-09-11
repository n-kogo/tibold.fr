import * as React from "react";
import {Link, BrowserRouter} from 'react-router-dom';
export class PageNav extends React.Component{
  routes: Array<string> = ['/', 'hens-world', 'le-refuge-des-souvenirs', 'the-last-frontier', 'one-eternity-to-run', 'wittyfit'];
  state: any = {
    position: 1
  };
  constructor(props){
    super(props);
  }
  render(){
    let currentRoute = this.routes[this.state.position];
    return (
      <Link className="page-nav" to={'/' + currentRoute} onClick={()=> this.updateNav()}>
      </Link>
    );
  }
  updateNav(){
    let p = this.state.position + 1;
    if(p >= this.routes.length) p = 0;
    this.setState({
      position: p
    })
  }
}