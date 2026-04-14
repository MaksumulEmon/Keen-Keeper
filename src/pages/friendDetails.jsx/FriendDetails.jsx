import React from 'react';
import { useParams } from 'react-router';
import useFriends from '../../hooks/useFriends';
import { FadeLoader } from 'react-spinners';

const FriendDetails = () => {
    const { id } = useParams();
    //  console.log(id);
    const { friends, loading } = useFriends();
    // console.log(friends ,loading)
    const expectedFriend = friends.find((friend) => friend.id == id)
    console.log(expectedFriend)




    if (loading) {
        return <div className='flex justify-center items-center h-[60vh]'>
            <FadeLoader />
        </div>
    }


    return (
        <div className='bg-[#F8FAFC]'>
            <div className='max-w-7xl mx-auto '>

                <div className=' grid grid-cols-1 lg:grid-cols-5 gap-5 lg:pt-17'>

                    <div className='lg:col-span-2 '>
                        <div>
                            <div className=' shadow-xl '>
                                <div className='text-center p-6  rounded-xl  bg-white shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] space-y-3  lg:m-0'>

                                    <div className='flex justify-center items-center '>
                                        <img src={expectedFriend.picture} alt="" className='w-20 h-20 rounded-full ' />
                                    </div>
                                    <p className='text-xl text-[#1F2937] font-semibold'>{expectedFriend.name}</p>


                                    <p className={`text-white py-2 px-3 rounded-full inline-block
                                ${expectedFriend.status === "almost due" && "bg-[#EFAD44]"}
                                ${expectedFriend.status === "overdue" && "bg-[#EF4444]"} 
                                ${expectedFriend.status === "on-track" && "bg-[#244D3F]"}`}
                                    >{expectedFriend.status}</p>


                                    <div>
                                        {
                                            expectedFriend.tags.map((tag, index) => {
                                                return (
                                                    <p key={index} className='text-[#64748B] font-medium  bg-[#CBFADB] inline-block px-3 py-1 rounded-full mr-2'>{tag}</p>
                                                );
                                            })

                                        }

                                    </div>

                                    <p className='italic font-medium text-[#64748B]'>{expectedFriend.bio}</p>

                                    <p className=' font-medium text-[#64748B]'>{expectedFriend.email}</p>



                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --------------------------------------------------- */}

                    <div className='lg:col-span-3'>


                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4'>

                            <div className='bg-white  shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-xl p-8 items-center text-center justify-center flex flex-col  '>
                                <p className='text-3xl font-semibold text-[#244D3F]'>62</p>
                                <p className='text-lg text-[#64748B]'>Days Since Contact</p>
                            </div>


                            <div className='bg-white  shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-xl p-8 items-center justify-center flex flex-col '>
                                <p className='text-3xl font-semibold text-[#244D3F]'>30</p>
                                <p className='text-lg text-[#64748B]'>Goal (Days)</p>
                            </div>

                            <div className='bg-white  shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-xl items-center p-8 justify-center flex flex-col '>
                                <p className='text-3xl font-semibold text-[#244D3F]'>Feb 27, 2026</p>
                                <p className='text-lg text-[#64748B]'>Next Due</p>
                            </div>

                            <div className='bg-white  shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-xl p-8 items-center justify-center flex flex-col '>
                                <p className='text-3xl font-semibold text-[#244D3F]'>30</p>
                                <p className='text-lg text-[#64748B]'>Goal (Days)</p>
                            </div>



                        </div>

                        {/* ------------------------------------------------------------- */}

                        <div className='bg-white  shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-xl p-10 m-4'>
                            <div className='flex justify-between items-center'>
                                <h1 className='text-xl text-[#244D3F] font-medium'>Relationship Goal</h1>
                                <button className='bg-[#E9E9E9] rounded border border-solid border-[#E9E9E9] px-3 py-1 cursor-pointer font-semibold '>Edit</button>
                            </div>

                            <p className=''> <span className='text-[#64748B]'>Connect every</span>  <span className='black font-semibold'>30 days</span></p>
                        </div>

                    </div>
                </div>






                {/* Second / Last Layout */}
{/* 
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-5'>

                    <div className='lg:col-span-2 '>
                        <div>
                            <div className=' shadow-xl '>
                                <div className='text-center p-6  rounded-xl  bg-white shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] space-y-3  lg:m-0'>

                                    <div className='flex justify-center items-center '>
                                        <img src={expectedFriend.picture} alt="" className='w-20 h-20 rounded-full ' />
                                    </div>
                                    <p className='text-xl text-[#1F2937] font-semibold'>{expectedFriend.name}</p>


                                    <p className={`text-white py-2 px-3 rounded-full inline-block
                                ${expectedFriend.status === "almost due" && "bg-[#EFAD44]"}
                                ${expectedFriend.status === "overdue" && "bg-[#EF4444]"} 
                                ${expectedFriend.status === "on-track" && "bg-[#244D3F]"}`}
                                    >{expectedFriend.status}</p>


                                    <div>
                                        {
                                            expectedFriend.tags.map((tag, index) => {
                                                return (
                                                    <p key={index} className='text-[#64748B] font-medium  bg-[#CBFADB] inline-block px-3 py-1 rounded-full mr-2'>{tag}</p>
                                                );
                                            })

                                        }

                                    </div>

                                    <p className='italic font-medium text-[#64748B]'>{expectedFriend.bio}</p>

                                    <p className=' font-medium text-[#64748B]'>{expectedFriend.email}</p>



                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}


            </div>

        </div>
    );
};

export default FriendDetails;