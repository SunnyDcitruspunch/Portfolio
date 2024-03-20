import React from 'react';
import './App.css';
import './Commons/reset.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Experiences from './Routes/Experiences/Experiences';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='/experiences'
          component={() => {
            return <Experiences />
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
