import React, { useContext } from 'react';
import { TimelineContext } from '../../context/TimelineContext';
import callPng from "../../assets/call.png";
import textPng from "../../assets/text.png";
import videoPng from "../../assets/video.png";

const Timelinepage = () => {

    const { activites } = useContext(TimelineContext);


    const getIcon = (type) => {
        if (type === "Call") return callPng;
        if (type === "Text") return textPng;
        if (type === "Video") return videoPng;
    };

    const currentTime = new Date().toLocaleTimeString();

    // console.log(call, "ContextData");
    return (
        <div className='bg-[#F8FAFC]'>

            <div className='max-w-7xl mx-auto'>
                <h5 className='text-5xl font-bold text-[#1F2937]  lg:py-3 mx-5'>Timeline </h5>
                <div className='flex flex-col gap-4 pb-10 m-5'>
                    {
                        activites.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded shadow flex items-center gap-3">
                                <img src={getIcon(item.type)} className="w-6 h-6" />

                                <div>
                                    <p className='text-[#64748B]'> <span className='text-xl text-[#244D3F]'>{`${item.type}`}</span> with <span className='text-[#64748B]'> {`${item.friend.name}`}</span></p>
                                    <p className="text-gray-500 font-medium">{currentTime}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Timelinepage;