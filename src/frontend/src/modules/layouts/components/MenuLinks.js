import React from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function MenuLinks() {
  const history = useHistory();
  const links = [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "",
    },
    {
      name: "Profile",
      url: "/profiles",
      icon: "",
    },
    {
      name: "Subject",
      url: "/subjects",
      icon: "",
    },
  ];

  const handleNavigate = (url) => {
    history.push(url);
  };

  return (
    <List>
      {links.map((text, index) => (
        <ListItem button key={index} onClick={() => handleNavigate(text.url)}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text.name} />
        </ListItem>
      ))}
    </List>
  );
}

export default MenuLinks;
