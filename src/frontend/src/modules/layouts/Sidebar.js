import React, { Fragment } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import List from "@material-ui/core/List";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { useHistory } from "react-router";

function Sidebar() {
  const history = useHistory();
  const links = [
    {
      name: "Dashboard",
      url: "/dashboard",
      link_icon: <DashboardIcon />,
    },
    {
      name: "Profile",
      url: "/profile",
      link_icon: <PersonIcon />,
    },
    {
      name: "Employee",
      url: "/employee",
      link_icon: <SupervisedUserCircleIcon />,
    },
  ];

  const handleNavigate = (url) => {
    history.push(url);
  };

  return (
    <Fragment>
      <List>
        {links.map(({ name, url, link_icon }, index) => (
          <ListItem button key={index} onClick={() => handleNavigate(url)}>
            <ListItemIcon>{link_icon ? link_icon : <MailIcon />}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
}

export default Sidebar;
