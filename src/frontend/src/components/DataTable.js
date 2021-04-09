import MUIDataTable from "mui-datatables";
import React from "react";

function DataTable(props) {
  const { title = "", data, columns, ...rest } = props;

  const options = {
    download: false,
    filter: false,
    print: false,
    responsive: "simple",
    search: false,
    serverSide: true,
    rowsPerPage: 15,
    page: 1,
    rowsPerPageOptions: [15, 25, 50, 100],
    ...rest,
  };

  return (
    <MUIDataTable
      title={title}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export default DataTable;
