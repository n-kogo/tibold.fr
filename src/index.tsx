import './style/style.scss';

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
import {Navbar} from "./components/Navbar";
import {Header} from "./components/Header";

ReactDom.render(
  <BrowserRouter>
    <div className="main">
      <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/le-refuge-des-souvenirs" component={LeRefuge}/>
            <Route path="/the-last-frontier" component={TheLastFrontier}/>
            <Route path="/hens-world" component={HensWorld}/>t
            <Route path="/eternity-run" component={EternityRun}/>
            <Route path="/wittyfit" component={Wittyfit}/>
            <Redirect to="/" />
          </Switch>
        </div>
      <Navbar />
    </div>
  </BrowserRouter>
  ,document.getElementById('root')
);