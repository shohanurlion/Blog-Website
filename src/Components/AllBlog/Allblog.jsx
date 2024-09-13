import React from 'react'
import Container from '../Container'
import Post from '../Latestpost/Post'
import Listblog from '../Bannerpart/Listblog'

const Allblog = () => {
  return (
   <>
    <Container>
      <div>
        <Listblog/>
      </div>
      <div className='mt-[10px] lg:mt-[20px]'>
      <Post/>
      </div>
      
    </Container>
   </>
  )
}

export default Allblog