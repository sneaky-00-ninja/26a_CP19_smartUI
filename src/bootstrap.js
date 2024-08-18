import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

import { thunk } from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(thunk)(compose((window.devToolExtension ? window.devToolExtension() : f => f)(createStore)));

//import 'bootstrap/dist/css/bootstrap.css';
import "./style/main.scss";

import Home from './components/home';
import Results from './components/results';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/results" component={Results}/>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
