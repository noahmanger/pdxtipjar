import React, { useState, useEffect } from "react";

import getWorkers from "../effects/getWorkers";
import Table from "./Table";

const Donate = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [numPerPage, setNumPerPage] = useState(50);
  const [filterText, setFilterText] = useState('');

  const fetchWorkers = async ({ pageNum, numPerPage }) => {
    try {
      setLoading(true);
      const { workers, count } = await getWorkers({
        pageNum,
        numPerPage,
        query: filterText,
      });
      
      setData(workers);
      setCount(count);
    } catch (error) {
      // no-op
    } finally {
      setLoading(false);
    }
  }
  const handleSearchInput = (e) => {
    setFilterText(e.target.value);
  };

  const handleSearchKeyPress = async (e) => {
    if (e.key !== 'Enter') {
      return;
    }

    await fetchWorkers({
      pageNum: 1,
      numPerPage,
      query: filterText,
    });
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    await fetchWorkers({
      pageNum: page,
      numPerPage: newPerPage,
      query: filterText,
    });

    setNumPerPage(newPerPage);
  };

  const handlePageChange = async (pageNum) => {
    await fetchWorkers({
      query: filterText,
      pageNum,
      numPerPage,
    });
  };

  useEffect(() => {
    fetchWorkers({
      pageNum: 1,
      numPerPage: 50,
    });
  }, []);

  return (
    <Table
      data={data}
      count={count}
      loading={loading}
      handlePerRowsChange={handlePerRowsChange}
      handlePageChange={handlePageChange}
      paginationPerPage={numPerPage}
      handleSearchInput={handleSearchInput}
      handleSearchKeyPress={handleSearchKeyPress}
    />
  );
};

export default Donate;
