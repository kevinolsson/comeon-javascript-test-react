import React from 'react';
import CasinoGames from './CasinoGames';
import PlayerDashboard from './PlayerDashboard';

class CasinoDashboard extends React.Component {
  render() {
    const { player } = this.props;
    return (
      <div className="casino-dashboard">
        <CasinoGames />
        <PlayerDashboard player={player} />
      </div>
    );
  }
}

export default CasinoDashboard;
