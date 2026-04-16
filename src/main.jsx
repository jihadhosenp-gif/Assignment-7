import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router';
import './index.css'
import MainLayout from './Layout/MainLayout';
import Home from './Home/Home';
import Timeline from './Timeline/Timeline';
import Stats from './Stats/Stats';
import ErrorPage from './ErrorPage/ErrorPage';
import FriendDetails from './FriendDetails/FriendDetails';
import FriendProvider from "./context/FriendProvider";
import { ToastContainer } from "react-toastify";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/timeline",
        element: <Timeline />
      },
      {
        path: "/stats",
        element: <Stats />
      },
      {
        path: "FriendDetails/:id",
        element: <FriendDetails />,
        loader: ()=> fetch('/FriendsData.json')
      }
    ],
    errorElement: <ErrorPage />
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      
    
     <RouterProvider router={router} />
     <ToastContainer />

    </FriendProvider>
  </StrictMode>
   
  
  
 
)
