import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';


import { createBrowserRouter, RouterProvider } from"react-router-dom";
import HomePage from './pages/Home/index.jsx';
import ProductsPage from './pages/Products/index.jsx';
import ProductPage from './pages/Product/index.jsx';
import CartPage from './pages/Cart/index.jsx';
import LoginPage from './pages/Login/index.jsx';
import AccountPage from './pages/Account/index.jsx';
import RegisterPage from './pages/Register/index.jsx';
import HeaderLayout from './layouts/HeaderLayout.jsx';
import ErrorPage from './pages/Error/index.jsx'
import { AuthProvider } from './context/AuthContext'; 




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


function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
