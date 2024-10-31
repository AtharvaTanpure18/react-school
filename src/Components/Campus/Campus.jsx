import React from 'react'
import './Campus.css'
import campus_1 from '../../assets/gallery-1.png'
import campus_2 from '../../assets/gallery-2.png'
import campus_3 from '../../assets/gallery-3.png'
import campus_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={campus_1} alt="Campus first photo" />
            <img src={campus_2} alt="Campus second photo" />
            <img src={campus_3} alt="Campus third photo" />
            <img src={campus_4} alt="Campus fourth photo" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="White arrow" /></button>
    </div>
  )
}

export default Campus
