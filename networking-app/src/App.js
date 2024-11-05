// this file is the main component of your app
// it includes the routing logic to switch between the home page and differnet chapters

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Chapter from './components/Chapter';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chapter/:id" component={Chapter} />
      </Switch>
    </Router>
  );
};

export default App;