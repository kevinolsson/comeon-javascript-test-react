import React from 'react';
import Game from './Game';
import SearchEmpty from './SearchEmpty';

class CasinoGames extends React.Component {
  render() {
    const { games } = this.props;
    return (
      <div className="casino-games">
        { (games.length > 0)
          ? Object.keys(games).map(key => <Game key={key} game={games[key]} />)
          : <SearchEmpty />
        }
      </div>
    );
  }
}

export default CasinoGames;
