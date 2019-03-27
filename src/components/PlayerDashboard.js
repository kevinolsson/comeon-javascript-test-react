import React from 'react';
import Player from './Player';

class PlayerDashboard extends React.Component {
  render() {
    const { player, filter, logoutPlayer } = this.props;
    return (
      <div className="player-dashboard">
        <Player player={player} logoutPlayer={logoutPlayer} />
      </div>
    );
  }
}

export default PlayerDashboard;
