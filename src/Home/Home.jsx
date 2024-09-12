import React from 'react'
import Container from '../Components/Container'
import Postcart from '../Components/Latestpost/Postcart'
import Add from '../Components/Addvertiesment/Add'

const Home = () => {
  return (
   <>
   <Container>
    <Add/>
    <Postcart/>
    <Add/>
   </Container>
   </>
  )
}

export default Home