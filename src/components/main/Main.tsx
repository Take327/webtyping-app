import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { PATH } from "../../common/constants";

import Home from "./home/Home";
import FreeTyping from "./free-typing/FreeTyping";
import RegisterWord from "./register-word/RegisterWord";
import Login from "./login/Login";
import Logout from "./logout/Logout";


const Main = () => (
  <main>
    <Container maxWidth="lg">
      <Box sx={{ height: "100vh" }}>
        <Routes>
          <Route path={PATH.HOME} element={<Home />} />
          <Route path={PATH.FREE_TYPING} element={<FreeTyping />} />
          <Route path={PATH.REGISTER_WORD} element={<RegisterWord />} />
          <Route path={PATH.LOGIN} element={<Login />} />
          <Route path={PATH.LOGOUT} element={<Logout />} />
        </Routes>
      </Box>
    </Container>
  </main>
);

export default Main;
