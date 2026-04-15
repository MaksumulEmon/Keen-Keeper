import { useState } from "react";
import { TimelineContext } from "./TimelineContext";


const TimelineProvider = ({ children }) => {

    const [activites,setActivites] = useState([]);
    


    const data = {
       activites,setActivites,
    };

    return (
        //  <TimelineCont.TimelineProvider value={data}>{children}</TimelineContext.TimelineProvider>
        <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>

    );
};

export default TimelineProvider;