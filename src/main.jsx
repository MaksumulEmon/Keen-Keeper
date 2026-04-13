import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router';
import RootLayout from './layout/RootLayout';
import Homepage from './pages/homepage/Homepage';
import Timelinepage from './pages/timelinepage/Timelinepage';
import Statuspage from './pages/statuspage/Statuspage';
import Errorpage from './pages/errorpage/Errorpage';



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/timeline",
        Component: Timelinepage,
      },
      {
        path: "/status",
        Component: Statuspage,
      }
    ],
    errorElement: <Errorpage/>
  },

]);



createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
