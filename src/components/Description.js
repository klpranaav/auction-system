import React from 'react'
import '../Images/description_page.jpg'
import './Description.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const Description = () => {
  return (
    <div>
      <Navbar />
      <div className="image-container">
        <img className='img1' src={require('../Images/description_page.jpg')} alt='description_image' />
      </div>
    </div>
  )
}

export default Description