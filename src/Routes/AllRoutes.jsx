import React from "react";
import { Route, Routes } from "react-router-dom";
import Customers from "../Pages/Customers";
import Features from "../Pages/Features";
import HomePage from "../Pages/HomePage";
import Integration from "../Pages/Integration";
import Pricing from "../Pages/Pricing";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

import Expenses from "../Pages/InnerPages/Expenses";
import Home from "../Pages/InnerPages/Home";
import Invoices from "../Pages/InnerPages/Invoices";
import Manage from "../Pages/InnerPages/Manage";
import Projects from "../Pages/InnerPages/Projects";
import Reports from "../Pages/InnerPages/Reports";
import Team from "../Pages/InnerPages/Team";
import Time from "../Pages/InnerPages/Time";
// import PrivateRoute from "../Components/PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* ----------------InnerRoutes------------------ */}
        <Route path="/home" element={<Home />} />
        <Route
          path="/time"
          element={
            // <PrivateRoute>
            <Time />
            // </PrivateRoute>
          }
        />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
