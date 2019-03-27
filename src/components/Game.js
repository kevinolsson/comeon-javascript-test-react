import React from 'react';

class Game extends React.Component {
  render() {
    const { game } = this.props;
    return (
      <div className="game">
        <div className="game__thumbnail" style={{ backgroundImage: `url(${game.icon})` }} />
        <div className="game__content">
          <span>{game.name}</span>
          <p>{game.description}</p>
          <button className="button button--card">Play Game</button>
        </div>
      </div>
    );
  }
}

export default Game;
