import React from 'react'
import CustomeHeader from "../../components/header/CustomHeader.jsx"
import TravelGrid from '../../components/travelgrid/TravelGrid.jsx'
import Destination from '../../components/destination/Destination.jsx'
import HeroSection from '../../components/heroSection/HeroSection.jsx'
import Footer from '../../components/footer/Footer.jsx'
import "./welcomePage.css"

const WelcomePage = () => {
  return (
    <div className='main-page'>
        <CustomeHeader/>
        <TravelGrid/>
        <Destination/>
        <HeroSection/>
        <Footer/>
    </div>
  )
}

export default WelcomePage