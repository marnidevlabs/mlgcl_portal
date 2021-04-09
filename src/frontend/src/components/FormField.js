import { TextField } from "@material-ui/core";
import React from "react";

function FormField(props) {
  const { errors, ...rest } = props;
  const newProps = {
    variant: "outlined",
    margin: "dense",
    error: (errors && errors.has(props.name)) || false,
    helperText: (errors && errors.first(props.name)) || "",
    ...rest,
  };

  return <TextField {...newProps} />;
}

export default FormField;
