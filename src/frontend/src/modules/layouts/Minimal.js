import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
});

function Minimal({ children }) {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar color="inherit">
          <Typography variant="h6">MLGCL Portal</Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.root}>{children}</main>
    </>
  );
}

export default Minimal;
