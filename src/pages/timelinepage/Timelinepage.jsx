import React, {  useContext } from 'react';
import { TimelineContext } from '../../context/TimelineContext';

const Timelinepage = () => {

    const contextData = useContext(TimelineContext);
    console.log(contextData ,"ContextData");
    return (
        <div>
            timelin epage......
        </div>
    );
};

export default Timelinepage;