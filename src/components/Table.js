import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import PaymentButton from "./PaymentButton";
import RandomPerson from "./RandomPerson";

const HEADERS = {
  work: "Where did you work",
  role: "What did you do there?",
  name: "Name",
  app: "Pay",
  handle: "Handle",
  support_others: "Do you support others financially?",
  healthcare: "Do you have healthcare?",
};

const VISIBLE_COLUMNS = ["work", "name", "app", "support_others", "healthcare"];

const tableOverrideStyles = {
  marginBottom: "0px",
  paddingBottom: "0px",
};

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
  cells: {
    style: {
      paddingLeft: "10px",
      paddingRight: "10px",
      wordBreak: "break-word",
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
  pagination: {
    style: {
      fontSize: "14px",
      backgroundColor: "transparent",
      borderTopStyle: "solid",
      borderTopWidth: "2px",
      borderTopColor: "#fff",
      color: "#000",
    },
  },
};

const generateColumns = (row, setSelectedPerson) =>
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
          cell: row => (
            <button className="person" onClick={() => setSelectedPerson(row)}>
              {row.name} {row.role && `(${row.role})`}
            </button>
          ),
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

const Table = ({
  data = [],
  count,
  handlePageChange,
  handlePerRowsChange,
  paginationPerPage,
  handleSearchInput,
  handleSearchKeyPress,
  filterText
}) => {
  const [rows, setRows] = React.useState([]);
  const [columns, setColumns] = React.useState([]);
  const [selectedPerson, setSelectedPerson] = React.useState({});

  useEffect(() => {
    if (!data.length) {
      return;
    }

    setColumns(generateColumns(data[0], setSelectedPerson));
    setRows(data.map((r, i) => ({
      ...{ id: i },
      ...r,
     })
    ));

  }, [data])

  if (rows.length === 0) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <React.Fragment>
      {Object.keys(selectedPerson).length > 0 && (
        <RandomPerson
          person={selectedPerson}
          clearPerson={() => setSelectedPerson({})}
        />
      )}
      <div className="table">
        <header className="table-header">
          <h2>{data.length} people looking for tips</h2>
          <input
            type="text"
            placeholder="Filter by name or place"
            onChange={handleSearchInput}
            onKeyPress={handleSearchKeyPress}
            value={filterText}
          />
        </header>
        <DataTable
          columns={columns}
          data={rows}
          onChangeRowsPerPage={handlePerRowsChange}
          onChangePage={handlePageChange}
          customStyles={customStyles}
          style={tableOverrideStyles}
          paginationRowsPerPageOptions={[50, 100, 200]}
          pagination
          paginationPerPage={paginationPerPage}
          paginationServer
          paginationTotalRows={count}
          fixedHeader
          noHeader
          overflowY
        />
      </div>
    </React.Fragment>
  );
};

export default Table;
