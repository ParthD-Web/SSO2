import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(user);

  return (
    isAuthenticated && (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: '#f9f9f9',
          borderRadius: '10px',
          width: '250px',
          margin: '2rem auto',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        }}
      >
        <img
          src={user?.picture}
          alt={user?.name}
          referrerPolicy="no-referrer"
          style={{
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            marginBottom: '1rem',
          }}
        />
        <h2 style={{ margin: '0.5rem 0' }}>{user.name}</h2>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
