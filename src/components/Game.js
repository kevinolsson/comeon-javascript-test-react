import React from 'react';

class Game extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        {match.params.id}
      </div>
    );
  }
}

export default Game;
