import React from 'react'
import Container from '../Container'
import Post from './Post'

const Postcart = () => {
  return (
   <>
   <div className='py-[80px]'>
    <Container>
        <div className='pb-[32px]'>
            <h1 className='text-[24px] leading-[28px] font-work-sans font-[700]'>Latest Post</h1>
        </div>
        <Post/>
    </Container>
   </div>
   </>
  )
}

export default Postcart