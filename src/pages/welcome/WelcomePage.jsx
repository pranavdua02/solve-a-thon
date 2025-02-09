import React from 'react'
import CustomeHeader from "../../components/header/CustomHeader.jsx"
import TravelGrid from '../../components/travelgrid/TravelGrid.jsx'
import Destination from '../../components/destination/Destination.jsx'
import HeroSection from '../../components/heroSection/HeroSection.jsx'
import Footer from '../../components/footer/Footer.jsx'
import "./welcomePage.css"
import Newsletter from '../../components/newsletter/Newsletter.jsx'

const WelcomePage = () => {
  return (
    <div className='main-page'>
        <CustomeHeader/>
        <TravelGrid/>
        <Destination/>
        <HeroSection/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default WelcomePage