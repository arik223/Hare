import React from 'react'
import { Route } from 'react-router-dom'
import Homepage from './Pages/Home/Home'
import Music from './Pages/Music/Music'
import Tours from './Pages/Tours/Tours'

const Routes = () => {
  return (
    <div>
      <Route exact={true} path="/" component={Homepage} />
      <Route path="/Music" component={Music} />
      <Route path="/tours" component={Tours} />
    </div>
  )
}

export default Routes