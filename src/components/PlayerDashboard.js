import React from 'react';

class PlayerDashboard extends React.Component {
  render() {
    const { player } = this.props;
    return (
      <div className="player-dashboard">
        <h1>
          Hello
          {player.details.name}
        </h1>
      </div>
    );
  }
}

export default PlayerDashboard;
