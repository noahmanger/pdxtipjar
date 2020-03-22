import React from "react";
import DataTable from "react-data-table-component";
import PaymentButton from "./PaymentButton";

const HEADERS = {
  work: "Where did you work",
  role: "What did you do there?",
  name: "Name",
  app: "Pay",
  handle: "Handle",
  support_others: "Do you support others?",
  healthcare: "Do you have healthcare?",
};

const VISIBLE_COLUMNS = ["work", "name", "app", "support_others", "healthcare"];

const customStyles = {
  table: {
    style: {
      backgroundColor: "transparent",
    },
  },
  headRow: {
    style: {
      backgroundColor: "transparent",
      borderBottomWidth: "4px",
      borderBottomColor: "#fff",
      borderBottomStyle: "solid",
    },
  },
  headCells: {
    style: {
      fontSize: "14px",
      padding: "10px",
      fontWeight: "bold",
    },
  },
  rows: {
    style: {
      fontSize: "14px",
      backgroundColor: "transparent",
      "&:not(:last-of-type)": {
        borderBottomStyle: "solid",
        borderBottomWidth: "2px",
        borderBottomColor: "#fff",
      },
    },
  },
};

const generateColumns = row =>
  Object.keys(row)
    .filter(d => VISIBLE_COLUMNS.indexOf(d) > -1)
    .map(d => {
      if (d === "app") {
        return {
          name: HEADERS[d],
          selector: d,
          cell: row => <PaymentButton app={row.app} handle={row.handle} />,
        };
      }
      if (d === "name") {
        return {
          name: HEADERS[d],
          selector: d,
          cell: row => `${row.name} ${row.role && `(${row.role})`}`,
        };
      }
      return {
        name: HEADERS[d],
        sortable: ["name", "work"].indexOf(d) > -1 ? true : false,
        selector: d,
        wrap: true,
        hide: ["healthcare", "support_others"].indexOf(d) > -1 ? "md" : "",
      };
    });

const Table = ({ data }) => {
  const [filterText, setFilterText] = React.useState("");
  const [rows, setRows] = React.useState([]);
  const [columns, setColumns] = React.useState([]);
  const filteredItems = filterText
    ? rows.filter(
        row => row.work && row.work.toLowerCase().includes(filterText)
      )
    : rows;

  if (data.length > 0 && rows.length === 0) {
    setColumns(generateColumns(data[0]));
    setRows(data.slice(1).map((r, i) => ({ ...{ id: i }, ...r })));
  }

  if (rows.length === 0) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div>
      <header className="table-header">
        <h2>{rows.length} people looking for tips</h2>
        <input
          type="text"
          placeholder="Filter by place"
          onChange={e => setFilterText(e.target.value)}
          value={filterText}
        />
      </header>
      <DataTable
        columns={columns}
        data={filteredItems}
        customStyles={customStyles}
        fixedHeader
        noHeader
        overflowY
      />
    </div>
  );
};

export default Table;
