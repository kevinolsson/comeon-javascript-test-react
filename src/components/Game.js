import React from 'react';
import { truncate } from '../helpers';

class Game extends React.Component {
  render() {
    const { game } = this.props;
    return (
      <div className="game">
        <div className="game__thumbnail" style={{ backgroundImage: `url(${game.icon})` }} />
        <div className="game__content">
          <span>{game.name}</span>
          <p>{ truncate(game.description) }</p>
          <button type="button" className="button button--card">Play Game</button>
        </div>
      </div>
    );
  }
}

export default Game;
