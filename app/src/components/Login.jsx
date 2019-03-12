import React, { useState } from 'react';

import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  > input {
    width: 100%;
    border: 1px solid black;
    border-radius: 3px;
    margin: 10px 0;
    height: 30px;
    padding: 0 10px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > button {
    width: 45%;
    border: 1px solid black;
    border-radius: 3px;
    margin: 10px 0;
    height: 30px;
    padding: 0 10px;
    background: white;
    color: black;

    :first-child {
      background-color: black;
      color: white;
    }
  }
`;

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <LoginContainer>
      <LoginForm>
        <InputWrapper>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type={props.signingUp ? 'text' : 'password' }
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </InputWrapper>
        <BtnWrapper>
          <button
            onClick={e => {
              e.preventDefault();
              props.onSubmit(username, password).then(() => {
                props.history.push('/');
              });
            }}
            type="submit"
          >
            {!props.signingUp ? 'Log In' : 'Submit'}
          </button>
          {!props.signingUp && (
            <button
              onClick={e => {
                e.preventDefault();
                props.history.push('/signup');
              }}
            >
              Sign Up
            </button>
          )}
        </BtnWrapper>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
