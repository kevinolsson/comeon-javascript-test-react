import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './Game';
import CasinoDashboard from './CasinoDashboard';
import NotFound from './NotFound';
import Unauthorized from './Unauthorized';

class Casino extends React.Component {
  render() {
    const { match, player } = this.props;
    console.log(player);
    return (
      <React.Fragment>
        <Switch>
          { !player.loggedIn
            ? <Route component={Unauthorized} />
            : (
              <React.Fragment>
                <Route exact path={`${match.url}/game/:id`} component={Game} />
                <Route path={match.url} component={CasinoDashboard} />
              </React.Fragment>
            )
          }
        </Switch>
      </React.Fragment>
    );
  }
}

export default Casino;
