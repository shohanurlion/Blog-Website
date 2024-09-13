import React from 'react'
import Container from '../Container'
import Bannerimg from '../../assets/Content.png'


const Banner = () => {
    return (
        <>
            <Container>
                <div className='py-[30px] mt-[100px]'>
                    <img src={Bannerimg} alt='bannerimg' className='w-full'/>
                </div>
            </Container>

        </>
    )
}

export default Banner