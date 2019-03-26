import React from 'react';
import Logout from './Logout';

class Player extends React.Component {
  render() {
    const { player, logoutPlayer } = this.props;
    return (
      <div className="player">
        <img className="player__avatar" src={player.details.avatar} alt="" />
        <div className="player__details">
          <h3>{player.details.name}</h3>
          <p>{player.details.event}</p>
        </div>
        <div className="player__actions">
          <Logout username={player.username} logoutPlayer={logoutPlayer} />
        </div>
      </div>
    );
  }
}

export default Player;
