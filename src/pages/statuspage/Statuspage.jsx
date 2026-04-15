import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineContext } from '../../context/TimelineContext';

const Statuspage = () => {

    // const data =[
    //     {name: "Group A", value: 400, fill: "0088FE"},
    //     {name: "Group A", value: 120, fill: "0088FE"},
    //     {name: "Group A", value: 230, fill: "0088FE"},
    //     {name: "Group A", value: 400, fill: "FF87FE"},
    // ]


    // const { installedApps } = useContext(InstalledAppContext);
    // const { apps, loading } = useApps();

    // const unstalledApps = apps.length - installedApps.length;

    const { activites } = useContext(TimelineContext);

    const call = activites.filter(item => item.type === "Call");
    const text = activites.filter(item => item.type === "Text");
    const video = activites.filter(item => item.type === "Video");



    const data = [
        { name: "Call", value: call.length, fill: "#244D3F" },
        { name: "Text", value: text.length, fill: "#7E35E1" },
        { name: "Video", value: video.length, fill: "#37A163" },
    ]
    return (

        <div className='bg-[#F8FAFC]'>
            <div className='max-w-7xl mx-auto '>

                <h1 className='text-5xl font-bold p-5'>Friendship Analytics</h1>
                <div className='bg-white rounded-2xl shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] p-5 '>

                    <h4 className='text-xl text-[#244D3F]'>By Interaction Type</h4>
                    <div className='flex justify-center m-5 '>

                        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                            <Pie
                                data={data}
                                innerRadius="80%"
                                outerRadius="100%"
                                // Corner radius is the rounded edge of each pie slice
                                cornerRadius="50%"
                                fill="#8884d8"
                                // padding angle is the gap between each pie slice
                                paddingAngle={5}
                                dataKey="value"
                                isAnimationActive={true}
                            />

                            <div className="mt-5">
                                <Legend />
                            </div>
                            <Tooltip />
                        </PieChart>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statuspage;