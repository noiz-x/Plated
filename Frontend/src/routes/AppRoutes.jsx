import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import RecipesList from "../pages/RecipesList";
import CreateRecipe from "../pages/CreateRecipe";
import RecipeDetails from "../pages/RecipeDetails";
import VerifyEmail from "../pages/VerifyEmail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../components/PrivateRoute";
import Dashboard from "../pages/Dashboard";
import ResetPassword from "../pages/ResetPassword";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-email/:key" element={<VerifyEmail />} />
      <Route path="/reset-password/:uidb64/:key" element={<ResetPassword />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recipes" element={<RecipesList />} />
        <Route path="/recipes/new" element={<CreateRecipe />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} />  */}
    </Routes>
  );
};

export default AppRoutes;
