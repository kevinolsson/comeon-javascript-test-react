import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './Game';
import CasinoDashboard from './CasinoDashboard';
import NotFound from './NotFound';

class Casino extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Switch>
          <Route exact path={`${match.url}/game/:id`} component={Game} />
          <Route path={match.url} component={CasinoDashboard} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Casino;
