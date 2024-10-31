import React from 'react'
import "./Hero.css"
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>

        <div className='hero-text'>
            <h1>We ensure good education for a better world</h1>
            <p>Our cutting edge currcilum is designed to empower students 
                with the knwoledge and skills and expirensces needed to excel in 
                the dyanamic field of education</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="arrow" /></button>
        </div>
      
    </div>
  )
}

export default Hero
