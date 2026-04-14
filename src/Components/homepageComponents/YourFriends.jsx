import React, { use, useEffect, useState } from 'react';

const YourFriends = () => {


    const [apps, setApps] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            console.log(data)
            setApps(data);


            // setTimeout(() => {
            //     setApps(data);
            //     setLoading(false)
            // }, 1000);
        };

        fetchData();
    }, []);


    return (
        <div className='bg-[#F8FAFC]'>
            <div className='max-w-7xl mx-auto'>
                <p className='text-2xl  font-semibold'>Your Friends</p>




            </div>
        </div>
    );
};

export default YourFriends;