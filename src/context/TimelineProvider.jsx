import { useState } from "react";
import { TimelineContext } from "./TimelineContext";


const TimelineProvider = ({ children }) => {

    const [call, setCall] = useState([]);
    


    const data = {
       call,setCall,
    };

    return (
        //  <TimelineCont.TimelineProvider value={data}>{children}</TimelineContext.TimelineProvider>
        <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>

    );
};

export default TimelineProvider;