import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Routes from "./Routes"
import { Router, Route } from "react-router-dom"
import createHistory from 'history/createBrowserHistory'
import * as serviceWorker from "./serviceWorker"
import Main from './Main'
const history = createHistory()

ReactDOM.render(
  <Router history={history}>
    <Main>
      <Routes />
    </Main>
  </Router>,
  document.getElementById("root")
)

serviceWorker.unregister()