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

const HomeTransition = (props: any) =>(
  <CSSTransition
    {...props}
    classNames={"homeTranslate"}
    timeout={1000}
    mountOnEnter={true}
    unmountOnExit={true}
  />
)

class App extends React.Component<any, any>{
  render(){
    let loc = this.props.location.pathname;
    console.log('location get', loc);
    return (
      <Provider store={store}>
        <div className="main">
          <Overlay>
            <h2>Hello Overlays</h2>
          </Overlay>
          <TransitionGroup  style={{width: '100%', height: "100%"}}>
            <HomeTransition key={loc}>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route>
                  <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                    <Header />
                    <div className="content">
                      <div className="page">
                        <Slider />
                        <TransitionGroup style={{width: '100%', maxHeight: "100%"}}>
                          <PageTransition key={loc}>
                            <Switch location={this.props.location}>
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
                    </div>
                  </div>
                </Route>
              </Switch>
            </HomeTransition>

          </TransitionGroup>
          <SvgDefinitions />
        </div>
      </Provider>
    )
  }
}

let AppComponent = withRouter(App);

ReactDom.render(
    <BrowserRouter>
      <Route path="/" component={AppComponent} />
    </BrowserRouter>
  ,document.getElementById('root')
);