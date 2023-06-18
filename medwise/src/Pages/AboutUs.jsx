import { Image , Box} from '@chakra-ui/react'
import React from 'react'
import aboutusbg from '../Images/aboutusbg.jpg'
import MedwiseLogo from '../Images/MedwiseLogo.png'
import Footer from '../components/Footer'

function Aboutus() {
  return (
    <Box>

      <Image src={aboutusbg} alt="bg" />

    <Footer/>

    </Box>
  )
}

export default Aboutus