import React, { useState } from 'react';

import AddNew from './AddNew';
import DeleteButton from './DeleteButton';

const EditForm = ({
  token,
  editData,
  handleEditForm,
  handleDeleteUser,
}) => (
  <div>
    <AddNew
      update
      token={token}
      defaultValues={editData}
      callback={handleEditForm}
    />
    <DeleteButton
      handleClick={() => handleDeleteUser({ userId: editData.user_id })}
    />
  </div>
);

export default EditForm;


