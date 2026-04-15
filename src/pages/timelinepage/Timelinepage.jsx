import React, { useContext, useState } from 'react';
import { TimelineContext } from '../../context/TimelineContext';
import callPng from "../../assets/call.png";
import textPng from "../../assets/text.png";
import videoPng from "../../assets/video.png";

const Timelinepage = () => {

    const { activites } = useContext(TimelineContext);
    const [filter, setFilter] = useState("all");


    const getIcon = (type) => {
        if (type === "Call") return callPng;
        if (type === "Text") return textPng;
        if (type === "Video") return videoPng;
    };

    const currentTime = new Date().toLocaleTimeString();

    const filteredActivities =
        filter === "all"
            ? activites
            : activites.filter((item) => item.type === filter);

    // console.log(call, "ContextData");
    return (
        <div className='bg-[#F8FAFC]'>

            <div className='max-w-7xl mx-auto'>

                <h5 className='text-5xl font-bold text-[#1F2937]  lg:py-2 mx-5'>Timeline </h5>


                {/* <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="select appearance-none mx-8"
                >
                    <option value="all">All</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select> */}

                <select value={filter} onChange={(e) => setFilter(e.target.value)} className= "select-bordered block mx-5 py-2 px-3 rounded border-2 border-black w-50  mt-3">
                    <option value="all">All</option>
                    <option value="Call">Call</option>
                    <option value="Text">Text</option>
                    <option value="Video">Video</option>
                </select>



{/* 
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
                </div> */}



                <div className='flex flex-col gap-4 pb-10 m-5'>
                    {filteredActivities.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded shadow flex items-center gap-3">

                            <img src={getIcon(item.type)} className="w-6 h-6" />

                            <div>
                                <p className='text-[#64748B]'>
                                    <span className='text-xl text-[#244D3F]'>
                                        {item.type}
                                    </span>{" "}
                                    with{" "}
                                    <span>{item.friend.name}</span>
                                </p>

                                <p className="text-gray-500 font-medium">
                                    {currentTime}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>





            </div>
        </div>
    );
};

export default Timelinepage;