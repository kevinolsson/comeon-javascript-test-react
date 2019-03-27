import React from 'react';
import { Link } from 'react-router-dom';
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
          <div className="launch-game__menu">
            <Link to="/casino">Back</Link>
          </div>
          <div id="game-launch" />
        </div>
      </React.Fragment>
    );
  }
}

export default LaunchGame;
