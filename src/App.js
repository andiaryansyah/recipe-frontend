import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbarr from "./components/navbar/Navbarr"
import Dashboard from "./components/dashboard/Dashboard"
import AddRecipe from "./components/addrecipe/AddRecipe"
import UpdateRecipe from "./components/updaterecipe/UpdateRecipe"
import Spinners from "./components/spinner/Spinner";
import Homepage from "./pages/homepage/Homepage";
import AboutUs from "./pages/about/AboutUs";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
const Recipedetails = lazy(() => import("./pages/singlerecipe/SingleRecipe"));
const Recipelist = lazy(() => import("./pages/recipelist/RecipeList"));


function App() {
  return (
    <React.StrictMode>
    <BrowserRouter>
    <Navbarr/>
      <Suspense fallback={<Spinners />}>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/recipelist" element={<Recipelist/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/addrecipe" element={<AddRecipe/>} />
        <Route path="//updaterecipe/users/:user_id/recipe/:id" element={<UpdateRecipe/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/users/:user_id/recipe/:id" element={<Recipedetails/>} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
  );
}

export default App;
