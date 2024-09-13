import React from 'react'
import Container from '../Container'
import Bannerimg2 from '../../assets/m-post-card-overlay@2x.png'
import { Link } from 'react-router-dom';

const Listblog = () => {
  return (
    <>
    <Container>
        <div className='px-4 md:px-0 py-[40px] mt-[30px] lg:mt-[80px]'>
          <div className='flex items-center justify-center'>
            <div>
              <h2 className='text-[20px] lg:text-[30px] leading-[10px] lg:leading-[36px] font-[600] font-work-sans'>Page TItle</h2>
              <ul className='flex items-center py-3'>
                <li className='text-[10px] md:text-[16px] leading-[20px] md:leading-[24px] font-[400] font-work-sans text-[#3B3C4A] px-2 border-r-2 border-[#E8E8EA]'><Link to={'/'}>Home</Link></li>
                <li className='text-[10px] md:text-[16px] leading-[20px] md:leading-[24px] font-[400] font-work-sans text-[#3B3C4A] px-2'>Link One</li>
              </ul>
            </div>
          </div>
          <div>
          <img src={Bannerimg2} alt='bannerimg' className='w-full'/>
          </div>
        </div>
    </Container>

</>
  )
}

export default Listblog