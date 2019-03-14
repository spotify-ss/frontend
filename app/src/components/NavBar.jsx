import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  return (
    <nav>
      <Link to="/by_user_thumbs">Songs by Like History</Link>
      <button onClick={props.loggingOut}>Logout</button>
    </nav>
  );
};

export default NavBar;
