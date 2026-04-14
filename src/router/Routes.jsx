import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import Timelinepage from "../pages/timelinepage/Timelinepage";
import Statuspage from "../pages/statuspage/Statuspage";
import Errorpage from "../pages/errorpage/Errorpage";
import FriendDetails from "../pages/friendDetails.jsx/FriendDetails";
// import FriendDetails from "../pages/friendDetails/FriendDetails";


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
                Component: FriendDetails,
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