import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import SSOSessionChecker from './components/SSOSessionChecker';
import Home from './pages/Home';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  const navigate = useNavigate();

  useEffect(() => {
    const handleRedirect = async () => {
      const storedState = window.history.state?.usr;
      if (storedState?.appState?.returnTo) {
        navigate(storedState.appState.returnTo);
      }
    };
    handleRedirect();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <SSOSessionChecker />

      <header>
        <h1>APP2</h1>
        {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
