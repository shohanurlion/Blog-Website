import React from 'react'
import Container from '../Container'
import Authorbox from './Authorbox'
import Post from '../Latestpost/Post'

const Author = () => {
    return (
        <>
            <div className='mt-[100px]'>
                <Container>
                    <div>
                       <Authorbox/>
                    </div>
                    <div>
                        <Post/>
                    </div>
                </Container>
            </div>
        </>

    )
}

export default Author