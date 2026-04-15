import { TimelineContext } from "./TimelineContext";


const TimelineProvider = ({children}) => {

const data = {
    name: "Emon",
    age: 21,

};

    return (
        //  <TimelineCont.TimelineProvider value={data}>{children}</TimelineContext.TimelineProvider>
        <TimelineContext.Provider value={data}>{children}</TimelineContext.Provider>
       
    );
};

export default TimelineProvider;