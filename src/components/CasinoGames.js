import React from 'react';
import Game from './Game';

class CasinoGames extends React.Component {
  render() {
    const { games } = this.props;
    return (
      <div className="casino-games">
        { (games.length > 0)
          ? Object.keys(games).map(key => <Game key={key} game={games[key]} />)
          : <h1>Can't find games</h1>
        }
      </div>
    );
  }
}

export default CasinoGames;
