import React from 'react';

class Login extends React.Component {
  state = {
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
        console.log(json);
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleForm}>
        <label htmlFor="username">
          <span>Username</span>
          <input type="text" name="username" id="username" value={username} onChange={this.handleInput} />
        </label>
        <label htmlFor="password">
          <span>password</span>
          <input type="password" name="password" id="password" value={password} onChange={this.handleInput} />
        </label>
        <div className="button__wrapper">
          <input type="submit" className="button button--primary" />
        </div>
      </form>
    );
  }
}

export default Login;
