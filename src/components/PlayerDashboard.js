import React from 'react';
import Player from './Player';
import SearchGame from './SearchGame';
import CategoryMenu from './CategoryMenu';

class PlayerDashboard extends React.Component {
  render() {
    const {
      player, filter, logoutPlayer, updateFilter,
    } = this.props;
    return (
      <div className="player-dashboard">
        <Player player={player} logoutPlayer={logoutPlayer} />
        <SearchGame filter={filter} updateFilter={updateFilter} />
        <CategoryMenu filter={filter} updateFilter={updateFilter} />
      </div>
    );
  }
}

export default PlayerDashboard;
