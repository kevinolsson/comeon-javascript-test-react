import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => (
  <div>
    <h1>You are not allowed to view this page!</h1>
    <Link to="/">Login page</Link>
  </div>
);

export default Unauthorized;
