import React from 'react';

class Player extends React.Component {
  render() {
    const { player } = this.props;
    return (
      <div className="player">
        <img src={player.details.avatar} alt="" />
      </div>
    );
  }
}

export default Player;
