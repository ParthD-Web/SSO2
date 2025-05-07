import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SSOSessionChecker = () => {
  const {
    isAuthenticated,
    getAccessTokenSilently,
    loginWithRedirect,
    isLoading,
  } = useAuth0();
  const [isCheckingSession, setIsCheckingSession] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      if (!isAuthenticated && !isLoading) {
        try {
          await getAccessTokenSilently({
            detailedResponse: true,
            cacheMode: 'off',
          });
        } catch (error) {
          console.log(
            'Silent token acquisition failed, trying prompt=none',
            error,
          );

          // try {
          //   await loginWithRedirect({
          //     prompt: 'none',
          //   });
          // } catch (err) {
          //   console.log('Silent SSO redirect failed', err);
          // }
        } finally {
          setIsCheckingSession(false);
        }
      } else {
        setIsCheckingSession(false);
      }
    };

    checkSession();
  }, [isAuthenticated, isLoading, getAccessTokenSilently, loginWithRedirect]);

  return isCheckingSession ? <div>Checking session...</div> : null;
};

export default SSOSessionChecker;
