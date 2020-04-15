import React, { useState, useEffect } from "react";

import getWorkers from "../effects/getWorkers";
import Table from "./Table";

const Donate = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [numPerPage, setNumPerPage] = useState(50);

  const handlePerRowsChange = async (newPerPage, page) => {
    await fetchWorkers({
      pageNum: page,
      numPerPage: newPerPage,
    });

    setNumPerPage(newPerPage);
  };

  const handlePageChange = async (pageNum) => {
    await fetchWorkers({
      pageNum,
      numPerPage,
    });
  };

  const fetchWorkers = async ({ pageNum, numPerPage }) => {
    try {
      setLoading(true);
      const { workers, count } = await getWorkers({
        pageNum,
        numPerPage,
      });
      
      setData(workers);
      setCount(count);
    } catch (error) {
      // no-op
    } finally {
      setLoading(false);
    }
  }

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
    />
  );
};

export default Donate;
