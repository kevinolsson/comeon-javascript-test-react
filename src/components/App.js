import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Casino from './Casino';
import NotFound from './NotFound';

class App extends React.Component {
  state = {
    player: {
      loggedIn: false,
      details: {},
    },
  };

  loginPlayer = (status, details) => {
    const { player } = { ...this.state };
    player.loggedIn = (status === 'success') ? true : false;
    player.details = details;
    this.setState(
      prevState => ({ player }),
    );
  }

  render() {
    const { player } = { ...this.state };
    return (
      <React.Fragment>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Login {...props} loginPlayer={this.loginPlayer} loggedIn={player.loggedIn} />}
            />
            <Route
              path="/casino"
              render={props => <Casino {...props} player={player} />}
            />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
