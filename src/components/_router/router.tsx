import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import PrivateRouter from "./PrivateRouter";
import Closet from "@/pages/:id";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRouter />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/closet/:id" element={<Closet />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
