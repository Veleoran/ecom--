import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from"react-router-dom";
import HomePage from './pages/Home/index.jsx';
import ProductsPage from './pages/Products/index.jsx';
import ProductPage from './pages/Product/index.jsx';
import CartPage from './pages/Cart/index.jsx';
import LoginPage from './pages/Login/index.jsx';
import AccountPage from './pages/Account/index.jsx';
import RegisterPage from './pages/Register/index.jsx';
import HeaderLayout from './layouts/HeaderLayout.jsx';

const router = createBrowserRouter([
  {
  element: <HeaderLayout/>,
  children : [
    {path: '/', element: <HomePage/>},
    {path: '/nos-produits', element: <ProductsPage/>},
    {path: '/produit/:id', element: <ProductPage/>},
    {path: '/panier', element: <CartPage/>},
    {path: '/connexion', element: <LoginPage/>},
    {path:'/mon-compte', element: <AccountPage/>},
    {path: "/inscription", element: <RegisterPage/>},
  ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)