import React from 'react';
import { FiPlus } from 'react-icons/fi';

const Banner = () => {
    return (

        <div className='bg-[#F8FAFC]'>
            <div className='max-w-7xl mx-auto '>

                <div className='text-center pt-5 lg:pt-17 space-y-2 lg:space-y-5'>
                    <h1 className='mx-4 text-4xl md:text-5xl text-[#1F2937] font-bold '>Friends to keep close in your life</h1>
                    <p className='text-[#64748B]/90'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most. </p>

                    <button className='btn bg-[#244D3F] text-white py-3 px-4'> <FiPlus /> Add a Friend</button>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 lg:mt-8 p-4'>

                    <div className='bg-white  shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-xl p-8 items-center justify-center flex flex-col '>
                        <p className='text-3xl font-semibold text-[#244D3F]'>10</p>
                        <p className='text-lg text-[#64748B]'>Total Friends</p>
                    </div>

                    <div className='bg-white  shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-xl p-8 items-center justify-center flex flex-col '>
                        <p className='text-3xl font-semibold text-[#244D3F]'>3</p>
                        <p className='text-lg text-[#64748B]'>On Track</p>
                    </div>

                    <div className='bg-white  shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-xl p-8 items-center justify-center flex flex-col '>
                        <p className='text-3xl font-semibold text-[#244D3F]'>6</p>
                        <p className='text-lg text-[#64748B]'>Need Attention</p>
                    </div>

                    <div className='bg-white  shadow-[0_1px_6px_0_rgba(0,0,0,0.08)] rounded-xl p-8 items-center justify-center flex flex-col '>
                        <p className='text-3xl font-semibold text-[#244D3F]'>12</p>
                        <p className='text-lg text-[#64748B]'>Interactions This Month</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banner;