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
import {AppContext} from './App.context';
import './App.styles.scss';

function App(props) {
  const {headerProps, homeProps, getFeaturePropertiesById} =
    React.useContext(AppContext);
  console.log(props);
  return (
    <Router>
      <Header {...headerProps} />
      <main>
        <Switch>
          <Route
            exact
            path={ROUTE.Home}
            render={() => <Home {...homeProps} />}
          />
          <Route
            exact
            path={ROUTE.Detail}
            render={({match}) => (
              <Detail {...getFeaturePropertiesById(match.params.id)} />
            )}
          />
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
