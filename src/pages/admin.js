import React, { useEffect, useState } from 'react';

import { useAuth0, Auth0Provider } from '../components/admin/Auth0';
import Layout from '../components/layout';
import AuthButton from '../components/admin/AuthButton';
import Admin from '../components/admin/Admin';
import config from '../config';

// route the user to the right place after login
const onRedirectCallback = (appState) => {
  const url = appState && appState.targetUrl ? appState.targetUrl : window.location.pathname;
  window.history.pushState(
    appState || {},
    null,
    url,
  );
};

const AuthWrapper = (props) => {
  const [token, setToken] = useState('');
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  
  useEffect(() => {
    const getToken = async () => {
      try {
        const { __raw: idToken } = await getIdTokenClaims()
        setToken(idToken);
        console.log('idToken: ', idToken);
      } catch (error) {
        // no-op
      }
    }

    getToken();
  })

  return props.render({ token, isAuthenticated })
}

const AdminPage = () => (
  <Auth0Provider
  domain={config.domain}
  client_id={config.clientId}
  redirect_uri={`${window.location.origin}/admin`}
  onRedirectCallback={onRedirectCallback}
  >
    <AuthWrapper
      render={({ token, isAuthenticated }) => (
        <Layout>
          <h1>Admin</h1>
          <AuthButton />
          {isAuthenticated && (
            <Admin
              token={token}
            />
          )}
        </Layout>
      )}
    />
  </Auth0Provider>
);

export default AdminPage;
