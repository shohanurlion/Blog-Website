import React from 'react'
import Container from '../Components/Container'
import Postcart from '../Components/Latestpost/Postcart'
import Add from '../Components/Addvertiesment/Add'
import Banner from '../Components/Benner/Banner'

const Home = () => {
  return (
   <>
   <Container>
    <Banner/>
    <Add/>
    <Postcart/>
    <Add/>
   </Container>
   </>
  )
}

export default Home