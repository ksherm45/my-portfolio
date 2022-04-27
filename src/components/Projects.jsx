import React from 'react';
import Kajio from '../images/Kajio.PNG'
import DDD from '../images/DDD.PNG'
import PortfolioPic from '../images/PortfolioPic.PNG'
import { Link } from 'react-router-dom';


function Projects() {
  return <div className='Projects'>
  
  <div className="thumbnail">
  <div className='title'> Kajio </div>
  <a href='https://kajio.herokuapp.com/landingpage'>
  <img src={Kajio} height={250} width={'100%'} alt = 'Kajio Pic'/>
  </a>
  <p className='ProjectDesc'>A social media app made with HBS, Javascript CSS, HTML. Backend uses MongoDB and Express</p>
  <div className='flex'>
  <a href='https://github.com/JohannesSattler/Kajio'>
  <button className='button' id='neon'>Code</button>
  </a>
  <button className='button' id='neon'>App</button>
  </div>
</div>


  <div className="thumbnail">
  <div className='title'>Door Dash Derby! </div>
  <img src={DDD} height={250} width={'90%'} alt = 'DDD Pic'/>
  <p className='ProjectDesc'>A basic X & Y axis collision game made with Javascript, HTML and CSS. Open with a live server in VS Code. </p>

  <div className='flex'>
  <a href='https://github.com/ksherm45/Door-Dash-Derby'>
  <button className='button' id='neon'>Code</button>
  </a>
  </div>
  </div>

  <div className="thumbnail">
  <div className='title'>My Portfolio </div>
  <img src={PortfolioPic} height={250} width={'90%'} alt = 'DDD Pic'/>
  <p className='ProjectDesc'>Made with React, Javascript, CSS and HTML!</p>

  <div className='flex'>
  <a href='https://github.com/ksherm45/my-portfolio'>
  <button className='button' id='neon'>Code</button>
  </a>
  </div>
  </div>



  </div>;


}

export default Projects;
