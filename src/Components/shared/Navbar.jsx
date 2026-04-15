import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Mynavlink from './Mynavlink';
import { GrHomeRounded } from 'react-icons/gr';
import { MdTimeline } from 'react-icons/md';
import { IoTimeOutline } from 'react-icons/io5';
import logoPng from '../../assets/logo.png'

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);
    return (


        <nav className="bg-white px-5 lg:px-15 py-5 border-b-2 border-[#E9E9E9]">
            <div className="flex justify-between items-center">

                {/* <p className='text-2xl font-extrabold text-[#244D3F]'>KeenKeeper</p> */}
                <img src={logoPng} alt="" />


                <div className="hidden md:flex gap-3">


                    <Mynavlink to={"/"}> <GrHomeRounded /> Home</Mynavlink>

                    <Mynavlink to={"/timeline"}> <IoTimeOutline /> Timeline</Mynavlink>

                    <Mynavlink to={"/status"}> <MdTimeline /> Stats</Mynavlink>



                </div>

                {/* Hamburger Icon */}
                <div
                    className="md:hidden text-2xl cursor-pointer"
                    onClick={() => setOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

            </div>

            <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-3`}>
                <div className=' flex flex-col gap-2 bg-gray-200 rounded p-4'>
                    <Mynavlink to={"/"}> <GrHomeRounded /> Home</Mynavlink>

                    <Mynavlink to={"/timeline"}> <IoTimeOutline /> Timeline</Mynavlink>

                    <Mynavlink to={"/status"}> <MdTimeline /> Stats</Mynavlink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;