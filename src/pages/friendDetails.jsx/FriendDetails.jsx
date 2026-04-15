import React, { useContext } from 'react';
import { useParams } from 'react-router';
import useFriends from '../../hooks/useFriends';
import { FadeLoader } from 'react-spinners';
import { VscBellDot } from 'react-icons/vsc';
import { FiArchive, FiPlus } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import callPng from "../../assets/call.png"
import textPng from "../../assets/text.png"
import videoPng from "../../assets/video.png"
import { TimelineContext } from '../../context/TimelineContext';
import { toast } from 'react-toastify';


const FriendDetails = () => {
    const { id } = useParams();
    //  console.log(id);
    const { friends, loading } = useFriends();
    // console.log(friends ,loading)
    const expectedFriend = friends.find((friend) => friend.id == id)
    // console.log(expectedFriend)


    const { setActivites } = useContext(TimelineContext);


    if (loading) {
        return <div className='flex justify-center items-center h-[60vh]'>
            <FadeLoader />
        </div>
    }



    // Call
    const handleCall = () => {
        setActivites(prev => [
            ...prev,
            {
                type: "Call",
                friend: expectedFriend
            }

        ]);
        toast.success(`Call with ${expectedFriend.name}`);


    };

    // Text
    const handleText = () => {
        setActivites(prev => [
            ...prev,
            {
                type: "Text",
                friend: expectedFriend
            }
        ]);
        toast.success(`Text with ${expectedFriend.name}`);
    }


    // Video
    const handleVideo = () => {
        setActivites(prev => [
            ...prev,
            {
                type: "Video",
                friend: expectedFriend
            }
        ]);
        toast.success(`Video call with ${expectedFriend.name}`);
    }





    return (
        <div className='bg-[#F8FAFC]'>
            <div className='max-w-7xl mx-auto '>

                <div className=' grid grid-cols-1 lg:grid-cols-5 gap-2 lg:pt-17 mx-5'>

                    <div className='lg:col-span-2 '>


                        <div className='text-center p-6  rounded-xl  bg-white shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] space-y-3  '>

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

                    {/* --------------------------------------------------- */}

                    <div className='lg:col-span-3'>


                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-4'>

                            <div className='bg-white  shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-xl p-8 items-center text-center justify-center flex flex-col  '>
                                <p className='text-3xl font-semibold text-[#244D3F]'>{expectedFriend.days_since_contact}</p>
                                <p className='text-lg text-[#64748B]'>Days Since Contact</p>
                            </div>


                            <div className='bg-white  shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-xl p-8 items-center justify-center flex flex-col '>
                                <p className='text-3xl font-semibold text-[#244D3F]'>{expectedFriend.goal}</p>
                                <p className='text-lg text-[#64748B]'>Goal (Days)</p>
                            </div>

                            <div className='bg-white  shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-xl items-center p-8 justify-center flex flex-col '>
                                <p className='text-3xl font-semibold text-[#244D3F]'>{expectedFriend.next_due_date}</p>
                                <p className='text-lg text-[#64748B]'>Next Due</p>
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

                <div className='grid  grid-cols-1 lg:grid-cols-5 gap-5 pb-10 mx-4'>

                    <div className='lg:col-span-2 '>
                        <div className='flex flex-col gap-4'>


                            <button className=' flex  items-center justify-center gap-2 w-full  font-medium text-[#1F2937] p-4 bg-white  rounded border border-solid border-[#E9E9E9]  py-3 px-4'> <VscBellDot /> Snooze 2 weeks</button>

                            <button className=' flex  items-center justify-center gap-2 w-full  font-medium text-[#1F2937] p-4 bg-white  rounded border border-solid border-[#E9E9E9]  py-3 px-4'> <FiArchive /> Archive</button>

                            <button className=' flex  items-center justify-center gap-2 w-full  font-medium text-red-600 p-4 bg-white  rounded border border-solid border-[#E9E9E9]  py-3 px-4'> <RiDeleteBin6Line color='red' /> Delete</button>

                        </div>
                    </div>




                    <div className='lg:col-span-3 bg-white mx-2'>

                        <div className='flex flex-col p-4  shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] rounded-xl '>



                            <p className='text-xl text-[#244D3F] font-medium'>Quick Check-In</p>

                            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 rounded'>

                                <div onClick={handleCall} className='flex flex-col bg-[#F8FAFC] items-center justify-center rounded border border-solid border-[#E9E9E9] p-4 space-y-3 hover:bg-gray-100 hover:border-gray-300 hover:shadow-sm
                                    transition-all duration-300 ease-in-out cursor-pointer active:scale-95'>
                                    <img src={callPng} alt="" className='w-7 h-7' />
                                    <h1 className='text-lg text-[#1F2937]'>Call</h1>
                                </div>


                                <div onClick={handleText} className='flex flex-col bg-[#F8FAFC] items-center justify-center rounded border border-solid border-[#E9E9E9] p-4 space-y-3 hover:bg-gray-100 hover:border-gray-300 hover:shadow-sm
                                      transition-all duration-300 ease-in-out cursor-pointer active:scale-95'>
                                    <img src={textPng} alt="" className='w-7 h-7' />
                                    <h1 className='text-lg text-[#1F2937]'>Text</h1>
                                </div>


                                <div onClick={handleVideo} className='flex flex-col bg-[#F8FAFC] items-center justify-center rounded border border-solid border-[#E9E9E9] p-4 space-y-3 hover:bg-gray-100 hover:border-gray-300 hover:shadow-sm
                                     transition-all duration-300 ease-in-out cursor-pointer active:scale-95'>
                                    <img src={videoPng} alt="" className='w-7 h-7' />
                                    <h1 className='text-lg text-[#1F2937]'>Video</h1>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>


            </div>

        </div>
    );
};

export default FriendDetails;