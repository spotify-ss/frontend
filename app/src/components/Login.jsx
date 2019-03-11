import React, { useState } from 'react';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <form onSubmit={props.login}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div>
          <button type="submit">Submit</button>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
