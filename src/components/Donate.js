import React, { useState, useEffect } from "react";

import getSheets from "../effects/getSheets";
import Table from "./Table";

const Donate = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length === 0) {
      getSheets()
        .then(response => setData(response))
        .catch(err => console.log(err));
    }
  });

  return <Table data={data} />;
};

export default Donate;
