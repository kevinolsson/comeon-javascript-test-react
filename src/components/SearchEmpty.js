import React from 'react';

const SearchEmpty = () => (
  <div className="search-empty error-page">
    <h1>Search returned empty!</h1>
    <p>Your search may be too specific. Try for something a bit more general.</p>
  </div>
);

export default SearchEmpty;
