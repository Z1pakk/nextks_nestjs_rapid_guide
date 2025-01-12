import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Navigate } from "react-router-dom";
import Links from "./pages/Links";
import Products from "./pages/products/Products";
import ProductForm from "./pages/products/ProductForm";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to={"/users"} />} />
            <Route path='/users' element={<Users />}/>
            <Route path='/users/:id/links' element={<Links />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />}/>
            <Route path='/products' element={<Products />} />
            <Route path='/products/create' element={<ProductForm />} />
            <Route path='/products/:id/edit' element={<ProductForm />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
