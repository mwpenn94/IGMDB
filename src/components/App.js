import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ProfileListContainer from './profiles/ProfileListContainer';
import ProfileShowContainer from './profiles/ProfileShowContainer';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={ProfileListContainer} />
            <Route path="/people/:id" exact component={ProfileShowContainer} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;