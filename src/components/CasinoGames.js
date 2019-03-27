import React from 'react';
import Game from './Game';
import SearchEmpty from './SearchEmpty';

class CasinoGames extends React.Component {
  render() {
    const { games } = this.props;
    return (
      (games.length > 0)
        ? (
          <div className="casino-games">
            {Object.keys(games).map(key => <Game key={key} game={games[key]} />)}
          </div>
        )
        : <SearchEmpty />
    );
  }
}

export default CasinoGames;
