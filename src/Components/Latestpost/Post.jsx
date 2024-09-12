import React from 'react'
import Cartimg from '../../assets/Rectangle 38.png'
import Authorimg from '../../assets/Image (2).png'

const Post = () => {
  return (
    <>
    <div className='w-[392px] h-[488px] overflow-hidden p-[15px] border-2 border-[#E8E8EA] rounded-[12px]'>
            <div className=''>
                {/* Cart img part */}
                <div>
                    <img src={Cartimg} alt='cart_img' className='w-full'/>
                </div>
                {/* Catagory part */}
                <div className='pt-[24px] pb-[16px]'>
                    <button className='py-[4px] px-[10px] bg-[#4B6BFB] rounded-[6px] text-[14px] leading-[20px] font-[500] font-work-sans text-[white] duration-700 ease-in-out hover:bg-[#181A2A]'>Technology</button>
                </div>
                {/* Title part */}
                <div className='pb-[20px]'>
                    <h2 className='text-[24px] leading-[28px] font-[600] font-work-sans text-[#181A2A]'>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                </div>
                {/* Author and Date part */}
                <div className='flex items-center gap-x-[30px]'>
                    <div className='flex items-center gap-x-3'>
                        <img src={Authorimg} alt='author_img'/>
                        <h4 className='text-[16px] leading-[24px] font-[500] font-work-sans text-[#97989F]'>Tracey Wilson</h4>
                    </div>
                    <p className='text-[16px] leading-[24px] font-[500] font-work-sans text-[#97989F]'>August 20, 2022</p>
                </div>
            </div>
    </div>
    </>
  )
}

export default Post