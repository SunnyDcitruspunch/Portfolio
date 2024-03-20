import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import * as three from 'three'
import Home from './Routes/Home/Home';
import HomePresenter from './Routes/Home/Presenter/HomePresenter';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          component={() => {
            return <Home presenter={
              new HomePresenter(document, three)
            } />
          }}
        />
      </Switch>
    </Router>
  )
}

export default App;
