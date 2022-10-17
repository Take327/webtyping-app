import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";

import { changeState } from "../../redux/slice/commonSlice";

import MenuButton from "./MenuButton";

import {PATH,MENU_TEXT} from "../../common/constants"

const Menu = () => {
  const dispatch = useAppDispatch();
  const openState = useAppSelector((state) => state.commonState.sideNaviOpen);

  return (
    <div>
      <React.Fragment key="left">
        <Drawer
          anchor="left"
          open={openState}
          onClose={() => dispatch(changeState())}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => dispatch(changeState())}
          >
            <MenuButton path={PATH.HOME} text={MENU_TEXT.HOME}>
              <HomeIcon />
            </MenuButton>
            <List>
              <Divider />
              <MenuButton path={PATH.FREE_TYPING} text={MENU_TEXT.FREE_TYPING}>
                <KeyboardIcon />
              </MenuButton>
              <MenuButton path={PATH.REGISTER_WORD} text={MENU_TEXT.REGISTER_WORD}>
                <SaveAsIcon />
              </MenuButton>
              <MenuButton path={PATH.LOGIN} text={MENU_TEXT.LOGIN}>
                <LoginIcon />
              </MenuButton>
              <MenuButton path={PATH.LOGOUT} text={MENU_TEXT.LOGOUT}>
                <LogoutIcon />
              </MenuButton>
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Menu;
