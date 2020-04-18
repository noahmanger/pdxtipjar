import React from 'react';

const styles = {
  button: {
    width: '100%',
    backgroundColor: '#cc3300',
  },
};

const DeleteButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      style={styles.button}
    >
      Delete User
    </button>
  );
};

export default DeleteButton;