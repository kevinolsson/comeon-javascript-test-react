import React from 'react';
import CasinoGames from './CasinoGames';
import PlayerDashboard from './PlayerDashboard';

class CasinoDashboard extends React.Component {
  state = {
    filter: '',
    games: {},
  }

  componentDidMount() {
    const { filter } = this.state;
    fetch(`http://localhost:3001/games?${filter}`, { method: 'get' })
      .then(response => response.json())
      .then((json) => {
        this.setState(
          prevState => ({ games: json }),
        );
      });
  }

  render() {
    const { player, logoutPlayer } = this.props;
    const { filter, games } = this.state;
    return (
      <div className="casino-dashboard">
        <CasinoGames games={games} />
        <PlayerDashboard player={player} logoutPlayer={logoutPlayer} filter={filter} />
      </div>
    );
  }
}

export default CasinoDashboard;
