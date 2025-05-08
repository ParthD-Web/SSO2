import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SSOSessionChecker = () => {
  const { isAuthenticated, getAccessTokenSilently, isLoading, user } =
    useAuth0();
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const justLoggedOut = sessionStorage.getItem('auth0.logout') === 'true';

      if (!isAuthenticated && !isLoading && !justLoggedOut) {
        try {
          await getAccessTokenSilently({
            detailedResponse: true,
            cacheMode: 'off',
          });
        } catch (error) {
          console.log('Silent token acquisition failed', error);
        }
      }

      setIsCheckingSession(false);
    };

    checkSession();
  }, [isAuthenticated, isLoading, getAccessTokenSilently]);

  return isCheckingSession ? <div>Checking session...</div> : null;
};

export default SSOSessionChecker;
