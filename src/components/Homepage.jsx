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
        <p>As a junior developer I am confident in my ability and skills within my stack.</p>
        </div>
        
        <div className='box'>
        <h1>MISSION</h1>
        <p>To help spread joy and compassion through technical solutions!</p>
        <p>Being able to work with a team and bring visions to reality is what excites me the most!</p>
        
        </div>

        <div className='box'>
        <h1>LOCATION</h1>
        <p>I am a American currently based in Santander, Spain. As a professional basketball player for the last 7 years I have been on the move but I am ready to hang my laces up and move to where ever I can pursue my career!</p>
        </div>

        
        


</section>

      

  </div>

  )}

export default Homepage;
