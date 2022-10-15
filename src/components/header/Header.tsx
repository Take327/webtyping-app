import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { useAppDispatch } from "../../redux/hooks";
import { changeState } from "../../redux/slice/commonSlice";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => dispatch(changeState())}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          WebTyping
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
