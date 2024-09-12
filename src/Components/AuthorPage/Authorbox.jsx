import React from 'react'
import Authorimg from '../../assets/Image3.png'
import { FaFacebookF,FaTwitter,FaInstagram   } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Authorbox = () => {
  return (
   <>
   <div className='flex justify-center w-full bg-[#F6F6F7] rounded-[12px] py-[48px]'>
        <div className='w-[668px] h-[248px] text-center'>
                <div className='w-[250px] h-[64px] mx-auto flex items-center gap-x-3 pb-[24px]'>
                    <div className='w-[64px] h-[64px] rounded-full'>
                    <img src={Authorimg} alt='authorimg'/>
                    </div>
                    <div className='text-left'>
                        <h4 className='text-[20px] leading-[28px] text-[#181A2A] font-[500] font-work-sans'>Jonathan Doe</h4>
                        <p className='text-[14px] leading-[20px] text-[#696A75] font-[400] font-work-sans'>Collaborator & Editor</p>
                    </div>
                </div>
                <p className='text-[18px] leading-[26px] text-[#3B3C4A] font-[400] font-work-sans'>Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.</p>
                <div className='w-[250px] h-[64px] mx-auto flex items-center justify-center gap-x-3'>
                    <ul className='flex items-center gap-x-5'>
                        <li className='w-[32px] h-[32px] bg-[#696A75] rounded-[6px] flex items-center justify-center text-[white] duration-700 ease-in-out cursor-pointer hover:bg-[white] hover:border-2 border-[black] hover:text-[black]'><FaFacebookF /></li>
                        <li className='w-[32px] h-[32px] bg-[#696A75] rounded-[6px] flex items-center justify-center text-[white] duration-700 ease-in-out cursor-pointer hover:bg-[white] hover:border-2 border-[black] hover:text-[black]'><FaTwitter /></li>
                        <li className='w-[32px] h-[32px] bg-[#696A75] rounded-[6px] flex items-center justify-center text-[white] duration-700 ease-in-out cursor-pointer hover:bg-[white] hover:border-2 border-[black] hover:text-[black]'><FaInstagram /></li>
                        <li className='w-[32px] h-[32px] bg-[#696A75] rounded-[6px] flex items-center justify-center text-[white] duration-700 ease-in-out cursor-pointer hover:bg-[white] hover:border-2 border-[black] hover:text-[black]'><IoLogoYoutube /></li>
                    </ul>
                </div>
        </div>
   </div>
   </>
  )
}

export default Authorbox