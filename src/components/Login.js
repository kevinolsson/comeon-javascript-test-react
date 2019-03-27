import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = {
    fail: false,
    username: '',
    password: '',
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState(
      prevState => ({ [name]: value }),
    );
  };

  handleForm = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const { loginPlayer } = this.props;
    fetch('http://localhost:3001/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(response => response.json())
      .then((json) => {
        if (json.status === 'success') {
          this.setState(
            prevState => ({ fail: false }),
          );
          loginPlayer(json.status, username, json.player);
        } else {
          this.setState(
            prevState => ({ fail: true }),
          );
        }
      });
  };

  render() {
    const { fail, username, password } = this.state;
    const { loggedIn } = this.props;
    return (
      <React.Fragment>
        {loggedIn
          && <Redirect to="/casino" push />
        }
        <form className="login-form" onSubmit={this.handleForm}>
          {fail
            && (
              <div className="error-message">
                <p>Invalid credentials!</p>
              </div>
            )
          }
          <label htmlFor="username">
            <input
              required
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={this.handleInput}
            />
            <span>Username</span>
          </label>
          <label htmlFor="password">
            <input
              required
              type="password"
              name="password"
              id="password"
              onChange={this.handleInput}
            />
            <span>Password</span>
          </label>
          <div className="button__wrapper">
            <input type="submit" className="button button--primary button--big" />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
