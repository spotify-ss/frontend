import React from 'react';

const NavBar = props => {
  return (
    <nav>
      <button onClick={() => props.gettingUserFit()}>Get User Fit</button>
      <button onClick={props.loggingOut}>Logout</button>
    </nav>
  );
};

export default NavBar;
