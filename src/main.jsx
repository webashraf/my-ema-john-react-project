import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Checkout from './comonents/Checkout/Checkout'
import cardLoaderData from './comonents/JS/cardLoaderData'
import Order from './comonents/Order/Order'
import Shop from './comonents/Shop/Shop'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: '/',
        element: <Shop />,
      },
      {
        path: 'order',
        element: <Order />,
        loader: cardLoaderData,

      },
      {
        path: 'morder',
        element: <div>Manage Order page</div>
      },
      {
        path: 'inventory',
        element: <div>Inventory page</div>
      },
      {
path: 'checkout',
element: <Checkout></Checkout>
      },
      {
        path: 'login',
        element: <div>Login page</div>
      },
    ]
  },
  {
    path: '*',
    element: <div>Error page</div>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)
