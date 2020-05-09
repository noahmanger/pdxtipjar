import React, { useState } from 'react';

import EditForm from './Edit';
import getWorkers from '../../effects/getWorkers';
import deleteWorker from '../../effects/deleteWorker';
import AdminTable from './Table';
import Modal from "../Modal";

const styles = {
  container: {
    margin: '10px 0',
  },
  searchInput: {
    width: '100%',
    marginBottom: '10px',
  },
};

const SearchForm = ({ token }) => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({});

  const handleRowClick = (row) => {
    setEditData(row);
    setShowModal(true);
  };

  const handleEditForm = () => {
    setEditData({});
    setData([]);
    setShowModal(false);
  };

  const handleDeleteUser = async ({ userId }) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?\nThis action cannot be undone.');

    if (!confirmed) {
      return false;
    }

    try {
      const { success } = await deleteWorker({ userId, token });

      if (!success) {
        throw new Error('Something went wrong while trying to delete a user.');
      }

      setData([]);
      setEditData({});
      setShowModal(false);
    } catch (error) {
      // no-op
    }
  };

  const handleChange = e => setValue(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { workers } = await getWorkers({
        token,
        query: value,
      });

      setValue('');
      setData(workers || []);
    } catch (error) {
    }
  };

  return (
    <>
      <div style={styles.container}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search by name or work"
            type="text"
            value={value}
            onChange={handleChange}
            style={styles.searchInput}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      {!!data.length && (
        <div style={styles.container}>
          <AdminTable data={data} handleRowClick={handleRowClick} />
          {showModal && (
            <Modal
              content={
                <EditForm
                  editData={editData}
                  handleEditForm={handleEditForm}
                  handleDeleteUser={handleDeleteUser}
                  token={token}
                />
              }
              closeModal={() => setShowModal(false)}
            />
          )}
        </div>
      )}
    </>
  );
};

export default SearchForm;
