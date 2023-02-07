import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './context'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-e5q82o11p7d2skp1.us.auth0.com"
  clientId="EruChwgf7SU73bKgq1bflz7PGQCfxhfY"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
  <AppProvider>
    <App />
  </AppProvider>
  </Auth0Provider>
);
