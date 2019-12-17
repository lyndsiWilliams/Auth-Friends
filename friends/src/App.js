import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Component
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
