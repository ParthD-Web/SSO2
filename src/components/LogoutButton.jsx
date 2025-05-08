import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    sessionStorage.setItem('auth0.logout', 'true');
    localStorage.clear();
    logout({
      logoutParams: { returnTo: `${window.location.origin}` },
    });
  };

  return (
    <button
      style={{
        backgroundColor: 'white',
        color: 'black',
        padding: '5px 10px',
        borderRadius: '10px',
      }}
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
