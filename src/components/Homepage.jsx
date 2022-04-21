import React from 'react';
import ProfilePic from '../images/ProfilePic.jpg'

function Homepage() {
  return (
  <div>
    <h1 className='Homepage'>Kaj Sherman's Portfolio!</h1>
      <div className='Profile'> <img src={ProfilePic} height={250} width={200} alt = 'Profile Pic'/></div>

<section className='Control'>

        <div className='box'>
        <h1> TECH STACK </h1>
        <p>MONGO, EXPRESS, REACT, NODEJS </p>
        <p>As a junior developer I know I have more to learn within my stack, but I am confident in my ability and desire to do so!</p>
        </div>
        
        <div className='box'>
        <h1>MISSION</h1>
        <p>To help spread joy and compassion!</p>
        <p>Being able to work with a team and bring visions to reality is what excites me the most!</p>
        
        </div>

        <div className='box'>
        <h1>LOCATION</h1>
        <p>I am American currently based in Santander, Spain. As a professional basketball player for the last 7 years I have been on the move but am ready to hang my laces up and move to where ever I can pursuit my career!</p>
        </div>

        
        


</section>

      

  </div>

  )}

export default Homepage;
