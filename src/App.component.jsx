import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ROUTE from './routes';
import Home from './Home/Home.component';
import Detail from './Detail/Detail.component';
import Profile from './Profile/Profile.component';
import Header from './shared/components/Header/Header.component';
// eslint-disable-next-line no-unused-vars
import {defaultProps as headerDefaultProps} from './shared/components/Header/Header.component';
import './App.styles.scss';

function App() {
  return (
    <Router>
      <Header /*{...headerDefaultProps}*/ />
      <main>
        <Switch>
          <Route exact path={ROUTE.Home} render={() => <Home />} />
          <Route exact path={ROUTE.Detail} render={() => <Detail />} />
          <Route exact path={ROUTE.Profile} render={() => <Profile />} />
          {/* Redirect all other links to home */}
          <Route
            path={ROUTE.AllUrlRegex}
            render={() => <Redirect to={ROUTE.Home} />}
          />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
