export const auth0Config = {
  domain: 'dev-nc7cdg4nhc8z8gi1.us.auth0.com', // e.g., 'your-tenant.us.auth0.com'
  clientId: 'SFwQLW5jijgxh6KydShvRLVBRMH85O0a', // different for each app
  redirectUri: window.location.origin,
  audience: 'https://dev-nc7cdg4nhc8z8gi1.us.auth0.com/api/v2/',
  scope: 'openid profile email offline_access',
  useRefreshTokens: true,
  cacheLocation: 'localstorage',
  logoutRedirectUri: window.location.origin,
};
