import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRouter />} />
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
