import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ProfileList from './profiles/ProfileList';
import ProfileShow from './profiles/ProfileShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={ProfileList} />
            <Route path="/people/:id" exact component={ProfileShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;