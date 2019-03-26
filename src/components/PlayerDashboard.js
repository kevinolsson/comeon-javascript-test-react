import React from 'react';
import Player from './Player';

class PlayerDashboard extends React.Component {
  render() {
    const { player } = this.props;
    return (
      <div className="player-dashboard">
        <Player player={player} />
      </div>
    );
  }
}

export default PlayerDashboard;
