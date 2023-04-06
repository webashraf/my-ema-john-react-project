import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import Shop from './comonents/Shop/Shop'
import Order from './comonents/Order/Order'
import cardLoaderData from './comonents/JS/cardLoaderData'

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
