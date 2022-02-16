import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamListContainer from './streams/ProfileListContainer';
import StreamShowContainer from './streams/ProfileShowContainer';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamListContainer} />
            <Route path="/people/:id" exact component={StreamShowContainer} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;