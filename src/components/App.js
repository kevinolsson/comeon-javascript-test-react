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
      username: null,
      loggedIn: false,
    },
  };

  loginPlayer = (value) => {
    const { player } = { ...this.state };
    player.loggedIn = (value === 'success') ? true : false;
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
