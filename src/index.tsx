import './style/style.scss';

import {connect, Provider} from 'react-redux';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {BrowserRouter, HashRouter, Route, Switch} from 'react-router-dom';
import {Redirect} from "react-router";
import {LeRefuge} from "./pages/LeRefuge";
import {Wittyfit} from './pages/Wittyfit';
import {HensWorld} from "./pages/HensWorld";
import {EternityRun} from "./pages/EternityRun";
import {Home} from "./pages/Home";
import {TheLastFrontier} from "./pages/TheLastFrontier";
import {Header} from "./components/Header";
import {SideNav} from "./components/SideNav";
import {Slider} from "./components/Slider";
import {configureStore} from "./store/createStore";
import {Overlay} from "./components/Overlay";

let store = configureStore();

class App extends React.Component{
  render(){
    let p = window.location.pathname;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="main">
            <Overlay>
              <h2>Hello Overlays</h2>
            </Overlay>
            <Header />
            <div className="content">
              <div className="page">
                <Slider currentPath={p} />
                {/*<Route path="/hens-world" component={Slider}>*/}
                {/*</Route>*/}
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/le-refuge-des-souvenirs" component={LeRefuge}/>
                  <Route path="/the-last-frontier" component={TheLastFrontier}/>
                  <Route path="/hens-world" component={HensWorld}/>t
                  <Route path="/eternity-run" component={EternityRun}/>
                  <Route path="/wittyfit" component={Wittyfit}/>
                  <Redirect to="/" />
                </Switch>
                <SideNav />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

ReactDom.render(
    <App />
  ,document.getElementById('root')
);