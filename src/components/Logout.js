import React from 'react';

class Logout extends React.Component {
  logoutPlayer = (event) => {
    const { username, logoutPlayer } = this.props;
    event.preventDefault();
    fetch('http://localhost:3001/logout', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
      }),
    })
      .then(response => response.json())
      .then((json) => {
        logoutPlayer();
      });
  }

  render() {
    const { player } = this.props;
    return (
      <button
        type="button"
        className="button button--secondary button--small"
        onClick={this.logoutPlayer}
      >
        Logout
      </button>
    );
  }
}

export default Logout;
