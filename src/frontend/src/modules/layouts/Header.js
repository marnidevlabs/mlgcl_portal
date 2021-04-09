import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Sidebar from "./Sidebar";
import {
  Breadcrumbs,
  Divider,
  IconButton,
  SwipeableDrawer,
  useMediaQuery,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Header({ children, pathName }) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 876px)");
  const [openSideBar, setOpenSidebar] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setOpenSidebar(false);
    }
  }, [isMobile]);

  const handleSidebar = () => {
    setOpenSidebar(!openSideBar);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {isMobile && (
            <IconButton color="inherit" edge="start" onClick={handleSidebar}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        anchor="left"
        open={openSideBar}
        onClose={handleSidebar}
        onOpen={handleSidebar}
      >
        <Sidebar />
      </SwipeableDrawer>

      {!isMobile && (
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <Sidebar />
          </div>
        </Drawer>
      )}

      <main className={classes.content}>
        <Toolbar />
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="textPrimary">{pathName}</Typography>
        </Breadcrumbs>
        <Divider />
        <div style={{ marginBottom: 15 }}></div>
        {children}
      </main>
    </div>
  );
}

export default Header;
