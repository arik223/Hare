import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Routes from "./Routes"
import { Router, BrowserRouter } from "react-router-dom"
// import { useRouterHistory } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import * as serviceWorker from "./serviceWorker"
import Main from './Main'
// const history = useRouterHistory(createHistory)({
//   basename: process.env.PUBLIC_URL
// })
const history = createHistory()

console.log(process.env.PUBLIC_URL)
ReactDOM.render(
  <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
    <Main>
      <Routes />
    </Main>
  </BrowserRouter>,
  document.getElementById("root")
)

serviceWorker.unregister()