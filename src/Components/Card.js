import React from 'react'
import './Card.css'
import axios from 'axios';

const Card = ({question, link1, link2, link3, image}) => {

  const handleButtonClick = async (link) => {
  
    try {
      const response = await axios.get(link);
      if(response.data.success === true) {
        console.log(true);
      }else {
        alert("All instances for this scale have been consumed. Create a new scale to continue")
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      console.log(null);
    }
  };
  return (
    <div className='card'>
      <img className='cardImage' src={image} alt='Doodle' />
      <div className='cardCoponent'>
      <h3 className='cardHead'>{question}</h3>
      <div className='emojis'>
        <div onClick={() =>handleButtonClick(link1)} className='emoji'>😡No</div>
        <div onClick={() =>handleButtonClick(link2)} className='emoji'>😔Maybe</div>
        <div onClick={() =>handleButtonClick(link3)} className='emoji'>😃Yes</div>
      </div>
      </div>
    </div>
  )
}

export default Card
