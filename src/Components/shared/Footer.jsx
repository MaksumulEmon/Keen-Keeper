import React from 'react';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='max-w-7xl mx-auto'>

                <div className='text-center space-y-2  pt-10 lg:pt-20 pb-6'>
                    <h1 className='font-bold text-4xl lg:text-6xl text-white' >KeenKeeper</h1>
                    <p className='text-white/40'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                    <p className='text-lg text-white font-medium pt-2'>Social Links</p>

                    <div className='flex items-center justify-center gap-3 pb-5'>

                        {/* Social Icone Dic=v */}
                        <div className='bg-white p-3 rounded-full'>
                            <GrInstagram />
                        </div>

                        <div className='bg-white p-3 rounded-full'>
                            <FaSquareFacebook />
                        </div>

                        <div className='bg-white p-3 rounded-full'>
                            <FaXTwitter />
                        </div>

                    </div>

                    {/* He tag */}
                    <hr className="border border-solid border-[#1a8862] opacity-20" />



                    <div className=' lg:flex  justify-between pt-2 lg:pt-5 text-[#FAFAFA] opacity-50'>

                        <div>
                            <small>© 2026 KeenKeeper. All rights reserved.</small>
                        </div>



                        <div className='flex justify-between gap-4 mt-4 m-4'>
                            <small>Privacy Policy</small>
                            <small>Terms of Service</small>
                            <small>Cookies</small>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    );
};

export default Footer;