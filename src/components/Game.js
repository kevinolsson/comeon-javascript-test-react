import React from 'react';
import { Link } from 'react-router-dom';
import { truncate } from '../helpers';

class Game extends React.Component {
  render() {
    const { game } = this.props;
    return (
       <Link to={`casino/game/${game.code}`} className="game">
        <div className="game__thumbnail" style={{ backgroundImage: `url(${game.icon})` }} />
        <div className="game__content">
          <span>{game.name}</span>
          <p>{ truncate(game.description) }</p>
          <button type="button" className="button button--card">Play Game</button>
        </div>
      </Link>
    );
  }
}

export default Game;
