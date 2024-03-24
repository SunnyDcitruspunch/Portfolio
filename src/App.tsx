import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './Commons/fonts.css'
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          component={() => {
            return <Home />
          }}
        />
      </Switch>
    </Router>
  )
}

export default App;
