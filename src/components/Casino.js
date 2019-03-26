import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './Game';
import CasinoDashboard from './CasinoDashboard';
import NotFound from './NotFound';
import Unauthorized from './Unauthorized';

class Casino extends React.Component {
  render() {
    const { match, player, logoutPlayer } = this.props;
    return (
      <React.Fragment>
        { !player.loggedIn
          ? <Route component={Unauthorized} />
          : (
            <Switch>
              <Route
                exact
                path={`${match.url}/game/:id`}
                render={props => <Game {...props} player={player} />}
              />
              <Route
                path={match.url}
                render={props => <CasinoDashboard {...props} player={player} logoutPlayer={logoutPlayer} />}
              />
            </Switch>
          )
        }
      </React.Fragment>
    );
  }
}

export default Casino;
