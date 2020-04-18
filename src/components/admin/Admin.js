import React from 'react';

import SearchForm from './Search';
import AddNew from './AddNew';

const Admin = ({ token }) => (
  <div>
    <SearchForm token={token} />
    <AddNew title="Add a worker" token={token} />
  </div>
);

export default Admin;