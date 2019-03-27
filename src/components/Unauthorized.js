import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Unauthorized = () => (
  <div>
    <Redirect to="/" push />
    {
      // I had ambitions of designing an unauthorized page, but a redirect might be better
      // <h1>You are not allowed to view this page!</h1>
      // <Link to="/">Login page</Link>
    }
  </div>
);

export default Unauthorized;
