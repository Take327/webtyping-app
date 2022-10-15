import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";

import { Link as RouterLink } from "react-router-dom";

type Props = {
  path: string;
  text: string;
  children: React.ReactNode;
};

const MenuButton: React.FC<Props> = ({ path, text, children }) => (
  <Link color="inherit" underline="none" component={RouterLink} to={path}>
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  </Link>
);

export default MenuButton;
