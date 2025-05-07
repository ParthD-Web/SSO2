import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      style={{
        backgroundColor: 'white',
        color: 'black',
        padding: '5px 10px',
        borderRadius: '10px',
      }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
