import React from 'react';

const FriendsCard = ({friend}) => {
    return (
        <div>
            <div  className='rounded-2xl hover:shadow-2xl transition '>
                <div className='text-center p-6  rounded-xl  bg-white shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] space-y-4 m-4 lg:m-0'>

                    <div className='flex justify-center items-center '>
                        <img src={friend.picture} alt="" className='w-20 h-20 rounded-full ' />
                    </div>
                    <p className='text-xl text-[#1F2937] font-semibold'>{friend.name}</p>
                    <p className='text-[#64748B] '>{friend.days_since_contact}day ago</p>
                    <p className='text-[#64748B]'>{friend.tags}</p>
                    {/* <p className={`text-white ${friend.status === "almost due" ? "bg-[#EFAD44]" : "bg-red-500"}`}>
                                    {friend.status}
                                </p> */}

                    <p className={`text-white py-2 px-3 rounded-full inline-block
                                ${friend.status === "almost due" && "bg-[#EFAD44]"}
                                ${friend.status === "overdue" && "bg-[#EF4444]"} 
                                ${friend.status === "on-track" && "bg-[#244D3F]"}`}
                    >{friend.status}</p>
                </div>
            </div>
        </div>
    );
};

export default FriendsCard;