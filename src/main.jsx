import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashboardLayout from './DashboardLayout/DashboardLayout.jsx';
import Dashboard from './DashboardLayout/DashboardRoutes/Dashboard/Dashboard.jsx';
import Beneficiaries from './DashboardLayout/DashboardRoutes/Beneficiaries/Beneficiaries.jsx';

// All routes starts there
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/beneficiaries",
        element: <Beneficiaries></Beneficiaries>
      }
    ]
  },
]);
// All routes ends there

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
