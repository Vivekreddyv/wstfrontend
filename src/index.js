import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Body from './main';
import Navland from './navland';
import Login from './components/login'
import Signup from './components/signup'
import Sellers from './components/sellers'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/products.js'
import Productdesc from './pages/productsdetails';

const Main=()=>{
  return(
    <div>
      <Navland/>
      <Body/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
   path:"/login",
   element: <Login/>
  },
  {
    path:"/signup",
    element: <Signup/>
   },
   {
    path:"/sellers",
    element:<Sellers/>
   },
   {
    path:"/buyers",
    element:<Products/>
   },
   {
    path:"/productdetails/:id",
    element:<Productdesc/>
   }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
