import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import equipes from './pages/equipes';
import addEquipes from './pages/addEquipes';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={equipes} />
        <Route path="/add-equipes" component={addEquipes} />
      </Switch>
    </Router>
  );
}

export default Routes;
