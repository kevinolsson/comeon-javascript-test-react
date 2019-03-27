import React from 'react';

class SearchGame extends React.Component {
  handleInput = (event) => {
    const { updateFilter } = this.props;
    event.preventDefault();
    updateFilter(`name_like=${event.target.value}`);
  }

  render() {
    return (
      <div className="search-game">
        <label htmlFor="search">
          <input required id="search" type="text" name="search" onChange={this.handleInput} />
          <span>Search Game</span>
        </label>
      </div>
    );
  }
}

export default SearchGame;
