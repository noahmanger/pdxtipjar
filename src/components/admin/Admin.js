import React, { useEffect } from 'react';

import config from '../../config';
import SearchForm from './Search';
import AddNew from './AddNew';

const Admin = ({ token }) => {
  const handleSearchInput = () => {

  };

  const handleFormSubmit = () => {

  };

  return (
    <div>
      <SearchForm token={token} />
      <AddNew title="Add a worker" token={token} />
    </div>
  );
};

export default Admin;

/*
  useEffect(() => {
    const getUsers = async () => {
      try {
        if (!token) {
          return;
        }

        const url = `${config.apiUrl}/workers`;
        const authHeader = `Bearer ${token}`;

        const response = await fetch(url, {
          method: 'GET',
          headers: {
          //   Authorization: authHeader,
          Accept: 'application/json'
          },
        });

        const parsedRes = await response.json();

      } catch (error) {
        console.log('error: ', error);
        // no-op
      }
    };

    getUsers();
  }, [token]);
*/