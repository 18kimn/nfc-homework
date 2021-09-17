import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './styles/styles.css'
import './styles/main.css'

import Keyboard from './Keyboard'
import Lockchain from './Lockchain'
import Home from './Home'
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/keyboard">
          <Keyboard />
        </Route>
        <Route path="/lockchain">
          <Lockchain />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
