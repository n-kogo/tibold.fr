import * as React from "react";
import {Link, BrowserRouter, withRouter} from 'react-router-dom';
import anime from "animejs";
class PageNavComponent extends React.Component<any, any>{
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
      <div className="page-nav"  onClick={this.changePage.bind(this)}>
        <div className="page-nav__arrow" style={arrowStyle}></div>
      </div>
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
  changePage(){
    let currentRoute = this.routes[this.state.position >= this.routes.length ? 0 : this.state.position + 1];
    this.updateNav();
    anime({
      targets: '.page',
      translateX: {
        value: '50%',
        duration: 800,
      },
      opacity:{
        value: 0,
        duration: 600,
        delay: 100,
      },
      easing: 'easeInOutCubic',
      complete: ()=>{
        this.props.history.push('/' + currentRoute);
        console.log('transition finish')
      }
    });
  }
}

export let PageNav = withRouter(PageNavComponent);