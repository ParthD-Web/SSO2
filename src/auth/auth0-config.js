// src/auth/auth0-config.js
export const auth0Config = {
  domain: 'dev-nc7cdg4nhc8z8gi1.us.auth0.com',
  // This clientId will be different for each app
  clientId: 'SFwQLW5jijgxh6KydShvRLVBRMH85O0a',
  redirectUri: window.location.origin,
  audience: 'https://dev-nc7cdg4nhc8z8gi1.us.auth0.com/api/v2/',
  scope: 'openid profile email offline_access',
  cacheLocation: 'localstorage',
  // SSO configuration
  useRefreshTokens: true,
  // Default logoutParams (can be overridden in the Auth0Provider)
  logoutParams: {
    returnTo: window.location.origin,
    clientId: 'SFwQLW5jijgxh6KydShvRLVBRMH85O0a',
  },
};
