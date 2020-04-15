import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Work',
    selector: 'work',
    sortable: true,
  },
  {
    name: 'Role',
    selector: 'role',
    sortable: true,
  },
];

const AdminTable = ({ data = [], handleRowClick }) => (
  <DataTable
    title="Workers"
    columns={columns}
    data={data}
    fixedHeader
    fixedHeaderScrollHeight="300px"
    pagination
    onRowClicked={handleRowClick}
  />
);

export default AdminTable;