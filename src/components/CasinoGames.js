import React from 'react';
import Game from './Game';

class CasinoGames extends React.Component {
  render() {
    const { games } = this.props;
    return (
      <div className="casino-games">
        {Object.keys(games).map(key => <Game key={key} game={games[key]} />)}
      </div>
    );
  }
}

export default CasinoGames;
