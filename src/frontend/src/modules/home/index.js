import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Revalidate } from "../../utils/helpers";
import * as services from "./service";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  form: {
    maxWidth: 600,
    width: "100%",
    padding: "0 20px",
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(1),
    },
  },
}));

const validator = Revalidate({
  email: "required",
  password: "required",
});

function Home() {
  const classes = useStyles();
  const history = useHistory();

  const [formValues, setFormValues] = useState({
    values: {
      email: "",
      password: "",
    },
    errors: validator.errors,
  });

  const handleRedirect = () => {
    services
      .login(formValues.values)
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
        } else {
          localStorage.setItem("accessToken", response.access_token);
          history.push("dashboard");
        }
      });
  };

  const handleSubmit = () => {
    validator.validateAll(formValues.values).then((success) => {
      if (success) {
        handleRedirect();
      } else {
        setFormValues((prev) => ({
          ...prev,
          errors: validator.errors,
        }));
      }
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const { errors } = validator;
    errors.remove(name);

    setFormValues((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));

    validator
      .validate(name, value)
      .then(() =>
        setFormValues((prev) => ({ ...prev, errors: validator.errors }))
      );
  };

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <Typography variant="h5" gutterBottom>
          Sign In
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          label="Username"
          name="email"
          value={formValues.values.email}
          onChange={handleChange}
          error={formValues.errors.has("email")}
          helperText={formValues.errors.first("email")}
          onKeyPress={handleKeyPress}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          value={formValues.values.password}
          onChange={handleChange}
          error={validator.errors.has("password")}
          helperText={formValues.errors.first("password")}
          onKeyPress={handleKeyPress}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Home;
