import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import Timelinepage from "../pages/timelinepage/Timelinepage";
import Statuspage from "../pages/statuspage/Statuspage";
import Errorpage from "../pages/errorpage/Errorpage";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                path: "/",
                Component: Homepage,
            },
            {
                path: "/:id",
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
        errorElement: <Errorpage />
    },

]);