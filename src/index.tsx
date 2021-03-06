import './style/style.scss';

import {connect, Provider} from 'react-redux';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import {Redirect, withRouter} from "react-router";
import {LeRefuge} from "./pages/LeRefuge";
import {Wittyfit} from './pages/Wittyfit';
import {HensWorld} from "./pages/HensWorld";
import {EternityRun} from "./pages/EternityRun";
import {CV} from "./pages/CV";
import {TheLastFrontier} from "./pages/TheLastFrontier";
import {Header} from "./components/Header";
import {SideNav} from "./components/SideNav";
import {Slider} from "./components/Slider";
import {configureStore} from "./store/createStore";
import {Overlay} from "./components/Overlay";
import {SvgDefinitions} from "./components/SvgDefinitions";
import {Landing} from "./pages/Landing";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {MetroLines} from "./components/MetroLines";
import * as classNames from 'classnames';
import {Menu} from "./components/Menu";
import {HoverBubble} from "./components/HoverBubble";
import {overlayContent} from "./globals";

//Bienvenue :)
console.info('Bienvenue sur mon portfolio!');
console.info('Si vous êtes intéressé par mon travail, vous pouvez me contacter à l\'adresse suivante: thibaut.carcenac@gmail.com');

let store = configureStore();
const PageTransition = (props: any) => (
  <CSSTransition
    {...props}
    classNames="fadeTranslate"
    timeout={1000}
    mountOnEnter={true}
    unmountOnExit={true}
  />
);

let Content = (props: any)=>{
  let loc = props.location.pathname;
  let style: any = {
    width: 30,
    position: 'absolute',
    height: 30,
    background: 'red',
    borderRadius: '50%',
    filter: 'url(#gooi)',
  };
  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column'}} className={"main-wrapper"}>
      <Header />
      <div className={classNames("content")}>
        {
          loc !== '/' ?
            <div className="page">
              <Slider />
              <TransitionGroup style={{width: '100%', maxHeight: "100%"}}>
                <PageTransition key={loc}>
                  <Switch location={props.location}>
                    <Route path="/home" component={CV}/>
                    <Route path="/le-refuge-des-souvenirs" component={LeRefuge}/>
                    <Route path="/the-last-frontier" component={TheLastFrontier}/>
                    <Route path="/hens-world" component={HensWorld}/>t
                    <Route path="/eternity-run" component={EternityRun}/>
                    <Route path="/wittyfit" component={Wittyfit}/>
                    <Redirect to="/" />
                  </Switch>
                </PageTransition>
              </TransitionGroup>
            </div>
          :
          ''
        }
      </div>
    </div>
  )
};
let ContentComponent = withRouter(Content);

class App extends React.Component<any, any>{
  render(){
    let loc = this.props.location.pathname;
    let tag =loc.replace('/', '');
    let overlayComponent = tag in overlayContent ?
      React.createElement(overlayContent[tag])
      : 'Nothing to see here';
    return (
      <Provider store={store}>
        <div className={classNames("main", {"page-open": loc !== '/'})}>
          <Menu />
          <HoverBubble />
          <Overlay>
            {overlayComponent}
          </Overlay>
          <Landing />
          <ContentComponent />
          <SvgDefinitions />
          <MetroLines />
        </div>
      </Provider>
    )
  }
  componentDidMount(){
    window.onresize = (e: any)=>{
      // prevent content to scroll/transition on page resize and move instantly
      document.querySelector('.main').classList.add('notransition');
      setTimeout(()=>{
        document.querySelector('.main').classList.remove('notransition');
      }, 100)
    };
  }
}

let AppComponent = withRouter(App);

ReactDom.render(
    <BrowserRouter>
      <Route path="/" component={AppComponent} />
    </BrowserRouter>
  ,document.getElementById('root')

);