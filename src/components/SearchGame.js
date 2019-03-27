import React from 'react';

class SearchGame extends React.Component {
  handleInput = (event) => {
    const { updateFilter } = this.props;
    event.preventDefault();
    updateFilter(`name_like=${event.target.value}`);
  }

  render() {
    return (
      <label htmlFor="search">
        <span>Search Game</span>
        <input id="search" type="text" name="search" placeholder="Search Game" onChange={this.handleInput} />
      </label>
    );
  }
}

export default SearchGame;
