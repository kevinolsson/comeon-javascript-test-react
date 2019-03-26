import React from 'react';

class Game extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>{match.params.id}</h1>
      </div>
    );
  }
}

export default Game;
