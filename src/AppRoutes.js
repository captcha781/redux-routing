import React, { Fragment } from "react";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import RouteCondition from "./helper/RouteCondition.js";

const Home = lazy(() => import("./pages/Home.js"));
const Dashboard = lazy(() => import("./pages/Dashboard.js"));
const Login = lazy(() => import("./pages/Login.js"));
const Profile = lazy(() => import("./pages/Profile.js"));

const AppRoutes = () => {
  return (
    <Fragment>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<RouteCondition type={'private'} Component={Dashboard} />} />
          <Route path="/profile" element={<RouteCondition type={'private'} Component={Profile} />} />
          <Route path="/login" element={<RouteCondition type={'auth'} Component={Login} />} />
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default AppRoutes;
