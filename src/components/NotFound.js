import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="error-page">
    <h1>That page doesnt exist!</h1>
    <Link to="/">Go back</Link>
  </div>
);

export default NotFound;
