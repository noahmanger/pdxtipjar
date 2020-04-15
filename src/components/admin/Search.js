import React, { useState } from 'react';

import EditForm from './Edit';
import searchWorkers from '../../effects/searchWorkers';
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

  const handleEditForm =() => {
    setEditData({});
    setData([]);
    setShowModal(false);
  };

  const handleChange = e => setValue(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { workers } = await searchWorkers({
        token,
        query: value,
      });
      
      setValue('');
      setData(workers);
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
