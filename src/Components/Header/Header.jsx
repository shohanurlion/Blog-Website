import React, { useEffect, useState } from 'react';
import Container from '../Container';
import logimg from '../../assets/Logo.png';
import { MdSupervisorAccount } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 20) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    

    return (
        <>
            <div className={isSticky ? 'navbar sticky' : 'navbar'}>
                <div className='px-4 md:px-0 py-[20px]'>
                    <Container>
                        <div className='flex items-center justify-between'>
                            {/* Logo part */}
                            <div className='w-[25%]'>
                                <img src={logimg} alt='log' />
                            </div>

                            {/* Desktop Nav part */}
                            <div className='hidden md:flex w-[50%] justify-end'>
                                <ul className='flex md:mr-5 xl:mr-0 md:gap-x-8 xl:gap-x-16'>
                                    <li className=' font-work-sans md:text-[12px] xl:text-[16px] xl:leading-[24px] font-normal text-[#3B3C4A]'><Link to={'/'}>Home</Link></li>
                                    <li className=' font-work-sans md:text-[12px] xl:text-[16px] xl:leading-[24px] font-normal text-[#3B3C4A]'><Link to={'/allblog'}>Blog</Link></li>
                                    <li className=' font-work-sans md:text-[12px] xl:text-[16px] xl:leading-[24px] font-normal text-[#3B3C4A]'><Link to={'/singlepost'}>Single Post</Link></li>
                                    <li className=' font-work-sans md:text-[12px] xl:text-[16px] xl:leading-[24px] font-normal text-[#3B3C4A]'><Link to={'/authorpage'}>Pages</Link></li>
                                    <li className=' font-work-sans md:text-[12px] xl:text-[16px] xl:leading-[24px] font-normal text-[#3B3C4A]'>Contact</li>
                                </ul>
                            </div>

                            {/* Input or icon part */}
                            <div className='hidden md:flex w-[25%] items-center justify-end gap-x-10'>
                                <div className='relative'>
                                    <input type='text' placeholder='Search' className='w-[100%] border py-2 px-3 bg-[#F4F4F5] rounded-[6px]' />
                                    <div className='absolute top-[14px] right-[16px]'>
                                        <IoIosSearch />
                                    </div>
                                </div>
                                <div className='w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#F4F4F5] cursor-pointer duration-700 ease-in-out hover:border-2 border-[black]'>
                                    <MdSupervisorAccount />
                                </div>
                            </div>

                            {/* Mobile Menu Toggle */}
                            <div className='md:hidden flex items-center justify-end'>
                                <button onClick={toggleMenu} className='text-2xl'>
                                    {menuOpen ? <RxCross2 /> : <FaBars />}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Nav Menu */}
                        {menuOpen && (
                            <div className='bg-[#F0E9DA] md:hidden flex flex-col mt-4'>
                                <ul className='flex flex-col text-center'>
                                    <li className=' font-work-sans text-[16px] leading-[24px] font-normal text-[#3B3C4A] py-2 duration-700 ease-in-out cursor-pointer hover:bg-[black] hover:text-[white]'><Link to={'/'}>Home</Link></li>
                                    <li className=' font-work-sans text-[16px] leading-[24px] font-normal text-[#3B3C4A] py-2 duration-700 ease-in-out cursor-pointer hover:bg-[black] hover:text-[white]'><Link to={'/allblog'}>Blog</Link></li>
                                    <li className=' font-work-sans text-[16px] leading-[24px] font-normal text-[#3B3C4A] py-2 duration-700 ease-in-out cursor-pointer hover:bg-[black] hover:text-[white]'><Link to={'/singlepost'}>Single Post</Link></li>
                                    <li className=' font-work-sans text-[16px] leading-[24px] font-normal text-[#3B3C4A] py-2 duration-700 ease-in-out cursor-pointer hover:bg-[black] hover:text-[white]'><Link to={'/authorpage'}>Pages</Link></li>
                                    <li className=' font-work-sans text-[16px] leading-[24px] font-normal text-[#3B3C4A] py-2 duration-700 ease-in-out cursor-pointer hover:bg-[black] hover:text-[white]'>Contact</li>
                                </ul>
                            </div>
                        )}
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Header;
