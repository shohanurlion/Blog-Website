import React from 'react'
import Container from '../Container'
import Singleimg1 from '../../assets/Image.png'
import Singleimg2 from '../../assets/Image (1).png'
import Add from '../Addvertiesment/Add'
import { CgProfile } from "react-icons/cg";

const Single = () => {
    return (
        <>
            <div className='mt-[100px]'>
                <Container>
                    {/* Title part */}

                    <div className='w-[75%] mx-auto'>
                        <div>
                            <button className='text-[14px] font-[500] leading-[20px] font-work-sans py-[6px] px-[12px] bg-[#4B6BFB] text-[white] rounded-[6px] duration-700 ease-in-out hover:bg-[white] hover:border-2 hover:border-[black] hover:text-[black]'>Technology</button>
                            <h1 className='text-[26px] md:text-[36px] font-bold leading-[32px] md:leading-[40px] font-work-sans text-[#181A2A] py-[20px] '>The Impact of Technology on the Workplace:<br/> How Technology is Changing</h1>
                            <div className='flex items-center gap-x-5'>
                                <div className='flex items-center gap-x-2'>
                                <CgProfile className='w-[28px] h-[28px] rounded-full bg-[#E8E8EA]'/>
                                <p className='text-[14px] font-[600] leading-[20px] font-work-sans text-[#97989F]'>Tracey Wilson</p>
                                </div>
                                <p className='text-[14px] font-[500] leading-[20px] font-work-sans text-[#97989F]'>August 20, 2022</p>
                            </div>
                        </div>

                        {/* Single part 1st img */}
                        <div>
                            <img src={Singleimg1} alt='single_img1' className='w-full py-[32px]' />
                        </div>
                        {/* Artical part */}
                        <div>
                            <p className='font-Source Serif font-normal text-[16px] md:text-[20px] leading-[26px]md:leading-[32px] pb-[32px]'>Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.</p>

                            <p className='font-Source Serif font-normal text-[16px] md:text-[20px] leading-[26px]md:leading-[32px] pb-[32px]'> One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
                            <h3 className='text-[24px] font-bold leading-[28px] font-work-sans text-[#181A2A] pb-[32px]'>Research Your Destination</h3>
                            <p className='font-Source Serif font-normal text-[16px] md:text-[20px] leading-[26px]md:leading-[32px] pb-[32px]'>Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.</p>

                            <p className='font-Source Serif font-normal text-[16px] md:text-[20px] leading-[26px]md:leading-[32px] pb-[32px]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.</p>
                            <h3 className='text-[24px] font-bold leading-[28px] font-work-sans text-[#181A2A] pb-[32px]'>Plan Your Itinerary</h3>
                            <p className='font-Source Serif font-normal text-[16px] md:text-[20px] leading-[26px]md:leading-[32px] pb-[32px]'>While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.</p>

                            <p className='font-Source Serif font-normal text-[16px] md:text-[20px] leading-[26px]md:leading-[32px] pb-[32px]'> Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>

                            {/* Quataion part */}
                            <div className='w-full bg-[#E8E8EA] px-[32px] py-[32px] rounded-[12px] text-center my-4'>
                                <p className='text-[16px] md:text-[20px] leading-[26px] md:leading-[32px] font-medium'>“ Traveling can expose you to new environments and potential health <br/>risks, so it's crucial to take precautions to stay safe and healthy. ”</p>
                            </div>
                            
                        {/* Single part 2st img */}
                        <div>
                            <img src={Singleimg2} alt='single_img1' className='w-full' />
                        </div>
                        {/* Addvertiesment part */}
                        <div className='w-full py-8'>
                            <Add/>
                        </div>

                        <div>
                            <h3 className='text-[24px] font-bold leading-[28px] font-work-sans text-[#181A2A] pb-[32px]'>Pack Lightly and Smartly</h3>
                            <p className='font-Source Serif font-normal text-[16px] md:text-[20px] leading-[26px]md:leading-[32px] pb-[32px]'>Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.</p>
                        </div>
                        
                        <div>
                            <h3 className='text-[24px] font-bold leading-[28px] font-work-sans text-[#181A2A] pb-[32px]'>Stay Safe and Healthy</h3>
                            <p className='font-Source Serif font-normal text-[16px] md:text-[20px] leading-[26px]md:leading-[32px] pb-[32px]'>Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.</p>
                        </div>
                        
                        <div>
                            <h3 className='text-[24px] font-bold leading-[28px] font-work-sans text-[#181A2A] pb-[32px]'>Immerse Yourself in the Local Culture</h3>
                            <p className='font-Source Serif font-normal text-[16px] md:text-[20px] leading-[26px]md:leading-[32px] pb-[32px]'>One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>
                        </div>
                        <div>
                            <h3 className='text-[24px] font-bold leading-[28px] font-work-sans text-[#181A2A] pb-[32px]'>Capture Memories</h3>
                            <p className='font-Source Serif font-normal text-[16px] md:text-[20px] leading-[26px]md:leading-[32px] pb-[32px]'>Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.</p>
                        </div>
                        <div>
                            <h3 className='text-[24px] font-bold leading-[28px] font-work-sans text-[#181A2A] pb-[32px]'>Conclusion</h3>
                            <p className='font-Source Serif font-normal text-[16px] md:text-[20px] leading-[26px]md:leading-[32px] pb-[32px]'>Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.</p>
                        </div>
                        </div>
                    </div>


                </Container>

            </div>
        </>
    )
}

export default Single