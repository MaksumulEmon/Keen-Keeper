import React, { useContext } from 'react';
import { TimelineContext } from '../../context/TimelineContext';

const Timelinepage = () => {

    const { call, setCall } = useContext(TimelineContext);
    console.log(call, "ContextData");
    return (
        <div className='bg-[#F8FAFC]'>

            <div className='max-w-7xl mx-auto'>
                <h5 className='text-5xl font-bold text-[#1F2937]'>Timeline </h5>
                {
                    call.map((cal, ind) => {
                        return <div key={ind}>


                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Timelinepage;