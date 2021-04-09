import { Avatar, Card, CardContent } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "../../../components/DataTable";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import * as service from "../service";
import FormField from "../../../components/FormField";

function Employee() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(service.getAllEmployees());
  }, [dispatch]);

  const columns = [
    {
      name: "user.image",
      label: " ",
      options: {
        customBodyRender: (value) =>
          value ? (
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          ) : (
            <Avatar>
              <InsertPhotoIcon />
            </Avatar>
          ),
      },
    },
    {
      name: "id",
      label: "Name",
      options: {
        customBodyRender: (value) => {
          let info = employees.items.filter((item) => item.id === value);
          info = (info && info[0]) || {};
          return `${info.last_name}, ${info.first_name} ${info.middle_name}`;
        },
      },
    },
    {
      name: "personal_email",
      label: "Personal Email",
    },
  ];

  const handleChangePage = (page) => {
    dispatch(service.getAllEmployees({ page: page + 1 }));
  };

  const handleChangeRowsPerPage = (limit) => {
    dispatch(service.getAllEmployees({ limit }));
  };

  return (
    <div>
      <Card>
        <CardContent>
          <FormField label="Search" />
        </CardContent>
      </Card>
      <DataTable
        title="Employees"
        columns={columns}
        data={employees.items || 0}
        page={employees.meta.current_page - 1}
        count={employees.meta.total}
        selectableRows="none"
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default Employee;
