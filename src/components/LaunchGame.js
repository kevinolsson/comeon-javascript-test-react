import React from 'react';
import '../lib/comeon.game-1.0.min';

class LaunchGame extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    comeon.game.launch(`${match.params.id}`); // eslint-disable-line no-undef
  }

  render() {
    return (
      <React.Fragment>
        <div className="launch-game">
          <div id="game-launch" />
        </div>
      </React.Fragment>
    );
  }
}

export default LaunchGame;
