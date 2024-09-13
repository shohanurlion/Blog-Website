import React from 'react';
import Container from '../Container';
import { IoMailOutline } from "react-icons/io5";
import Footerlog from '../../assets/Logo2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='bg-[#E8E8EA] pt-[16px] mt-5 lg:mt-[100px] px-4 md:px-0'>
                <Container>
                    <div className='flex flex-col lg:flex-row justify-between py-5 md:px-0 mb-8'>
                        <div className='w-full lg:w-[30%] mb-8 lg:mb-0'>
                            <div className=''>
                                <h5 className='font-plus-jakarta text-[18px] text-[#181A2A] font-medium leading-[28px] xl:font-bold'>About</h5>
                                <p className='font-plus-jakarta text-[16px] text-[#696A75] font-medium leading-[24px] pt-[12px] pb-[24px]'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <h5><span className='font-plus-jakarta text-[16px] font-bold leading-[24px]'>Email:</span> info@jstemplate.net</h5>
                                <h5><span className='font-plus-jakarta text-[16px] font-bold leading-[24px]'>Phone:</span> 880 123 456 789</h5>
                            </div>
                        </div>
                        
                        <div className='flex flex-col md:flex-row justify-center w-full lg:w-[40%] gap-x-12 mb-8 lg:mb-0'>
                            <div>
                                <h5 className='font-plus-jakarta text-[18px] text-[#181A2A] font-medium leading-[28px] xl:font-bold pb-[9px]'>Quick Links</h5>
                                <ul>
                                <li className='font-plus-jakarta text-[16px] text-[#696A75] font-medium leading-[24px] pb-[8px] cursor-pointer'>Home</li>
                                <li className='font-plus-jakarta text-[16px] text-[#696A75] font-medium leading-[24px] pb-[8px] cursor-pointer'>About</li>
                                <li className='font-plus-jakarta text-[16px] text-[#696A75] font-medium leading-[24px] pb-[8px] cursor-pointer'>Blog</li>
                                <li className='font-plus-jakarta text-[16px] text-[#696A75] font-medium leading-[24px] pb-[8px] cursor-pointer'>Archived</li>
                                <li className='font-plus-jakarta text-[16px] text-[#696A75] font-medium leading-[24px] pb-[8px] cursor-pointer'>Author</li>
                                <li className='font-plus-jakarta text-[16px] text-[#696A75] font-medium leading-[24px] pb-[8px] cursor-pointer'>Contact</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className='font-plus-jakarta text-[18px] text-[#181A2A] font-medium leading-[28px] xl:font-bold pb-[9px]'>Category</h5>
                                <ul>
                                <li className='font-plus-jakarta text-[16px] text-[#696A75] font-medium leading-[24px] pb-[8px] cursor-pointer'>Lifestyle</li>
                                <li className='font-plus-jakarta text-[16px] text-[#696A75] font-medium leading-[24px] pb-[8px] cursor-pointer'>Technology</li>
                                <li className='font-plus-jakarta text-[16px] text-[#696A75] font-medium leading-[24px] pb-[8px] cursor-pointer'>Travel</li>
                                <li className='font-plus-jakarta text-[16px] text-[#696A75] font-medium leading-[24px] pb-[8px] cursor-pointer'>Business</li>
                                <li className='font-plus-jakarta text-[16px] text-[#696A75] font-medium leading-[24px] pb-[8px] cursor-pointer'>Economy</li>
                                <li className='font-plus-jakarta text-[16px] text-[#696A75] font-medium leading-[24px] pb-[8px] cursor-pointer'>Sports</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className='w-full lg:w-[30%] flex justify-center lg:justify-end'>
                            <div className='text-center bg-[white] w-full lg:w-[392px] py-[32px] rounded-[12px] px-5 lg:px-0'>
                                <h5 className='font-plus-jakarta text-[18px] text-[#181A2A] font-medium leading-[28px] xl:font-bold pb-[8px]'>Weekly Newsletter</h5>
                                <p className='font-plus-jakarta text-[16px] text-[#696A75] font-medium leading-[24px] pb-[30px]'>
                                    Get blog articles and offers via email
                                </p>
                                <div className='pb-[8px] relative'>
                                    <input type='text' placeholder='Your Email' className='w-full lg:w-[290px] py-[12px] px-[8px] border-2 border-[#DCDDDF] outline-none' />
                                    <div className='absolute top-[15px] right-[19px] lg:right-[73px]'>
                                        <IoMailOutline />
                                    </div>
                                </div>
                                <button className='w-full lg:w-[290px] text-[16px] font-medium font-work-sans leading-[24px] text-[white] py-[12px] px-[8px] bg-[#4B6BFB] rounded-[6px]'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    
                    <hr className='border-b-2 border-[#DCDDDF] pt-[0px]' />
                    
                    <div className='flex flex-col md:flex-row items-center justify-between py-[32px]'>
                        <div className='flex items-center gap-x-3 mb-4 md:mb-0'>
                            <img src={Footerlog} alt='Footerlog' />
                            <div>
                                <p className='font-plus-jakarta text-[20px] font-bold leading-[28px]'>MetaBlog</p>
                                <p className='font-plus-jakarta text-[16px] font-normal leading-[24px]'>© JS Template 2023. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div>
                            <ul className='flex flex-col md:flex-row items-center gap-x-8'>
                                {['Terms of Use', 'Privacy Policy', 'Cookie Policy'].map((item, idx) => (
                                    <li key={idx} className='font-plus-jakarta text-[16px] font-normal leading-[24px]'>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Footer;
