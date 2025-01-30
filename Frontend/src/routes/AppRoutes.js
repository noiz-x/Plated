import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import RecipesList from "../pages/RecipesList";
import CreateRecipe from "../pages/CreateRecipe";
import RecipeDetails from "../pages/RecipeDetails";
import VerifyEmail from "../pages/VerifyEmail";
import Login from "../pages/Login";
import Register from "../pages/Register";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<RecipesList />} />
      <Route path="/recipes/new" element={<CreateRecipe />} />
      <Route path="/recipes/:id" element={<RecipeDetails />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-email/:key" element={<VerifyEmail />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="*" element={<NotFound />} />  */}
    </Routes>
  );
};

export default AppRoutes;
