import React from 'react';
import CasinoGames from './CasinoGames';
import PlayerDashboard from './PlayerDashboard';

class CasinoDashboard extends React.Component {
  state = {
    filter: '',
    games: {},
  }

  render() {
    const { player } = this.props;
    const { filter, games } = this.state;
    return (
      <div className="casino-dashboard">
        <CasinoGames games={games} />
        <PlayerDashboard player={player} filter={filter} />
      </div>
    );
  }
}

export default CasinoDashboard;
