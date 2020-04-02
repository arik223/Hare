import React from 'react'
import { Route } from 'react-router-dom'
import Homepage from './Pages/Home/Home'
import Music from './Pages/Music/Music'
import Tours from './Pages/Tours/Tours'

const Routes = () => {
  const baseName = process.env.PUBLIC_URL

  return (
    <div>
    <Route exact={true} path="/" component={Homepage} />
    <Route sensitive path="/Music" component={Homepage} />
    <Route sensitive path="/Tour" component={Homepage} />
    <Route sensitive path="/Merch" component={Homepage} />
    <Route sensitive path="/About" component={Homepage} />

    
    </div>
  )
}

export default Routes