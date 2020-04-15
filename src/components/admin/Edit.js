import React, { useState } from 'react';

import AddNew from './AddNew';

const EditForm = ({ token, editData, handleEditForm }) => {
  return (
    <div>
      <AddNew
        update
        token={token}
        defaultValues={editData}
        callback={handleEditForm}
      />
    </div>
  );
};

export default EditForm;


