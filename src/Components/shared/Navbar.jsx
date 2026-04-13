import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);
    return (


        <nav className="bg-white px-5 lg:px-15 py-4 border-b-2 border-[#E9E9E9] ">
            <div className="flex justify-between items-center">
                
                <p className='text-2xl font-extrabold text-[#244D3F]'>KeenKeeper</p>


                <div className="hidden md:flex gap-3">
                    <button className="bg-[#244D3F] px-3 py-1 rounded">Home</button>
                    <button className="bg-[#244D3F] px-3 py-1 rounded">About</button>
                    <button className="bg-[#244D3F] px-3 py-1 rounded">Contact</button>
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
                <button className="block w-full text-left bg-gray-600 px-3 py-4 border-b border-gray-700">Home</button>
                <button className="block w-full text-left bg-gray-600 px-3 py-4 border-b border-gray-700">About</button>
                <button className="block w-full text-left bg-gray-600 px-3 py-4">Contact</button>
            </div>
        </nav>
    );
};

export default Navbar;