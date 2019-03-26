import React from 'react';

class PlayerDashboard extends React.Component {
  render() {
    return (
      <div className="player-dashboard">
        <h1>Hello {this.props.player.details.name}</h1>
      </div>
    );
  }
}

export default PlayerDashboard;
