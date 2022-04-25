import React from 'react';
import Kajio from '../images/Kajio.PNG'
import DDD from '../images/DDD.PNG'
import PortfolioPic from '../images/PortfolioPic.PNG'
import { Link } from 'react-router-dom';


function Projects() {
  return <div className='Projects'>
  
  <div className="thumbnail">
  <div className='title'> Kajio </div>
  <figure>
  <a href='https://kajio.herokuapp.com/landingpage'>
  <img src={Kajio} height={250} width={200} alt = 'Kajio Pic'/>
  </a>
  </figure>
  <p className='ProjectDesc'>A social media app made with HBS, CSS, HTML. Backend uses MongoDB and Express</p>
  <a href='https://github.com/JohannesSattler/Kajio'>
  <button className='button'>Code</button>
  </a>
  <button className='button'>App</button>
</div>


  <div className="thumbnail">
  <div className='title'>Collision Game! </div>
    <figure>
  <img src={DDD} height={250} width={200} alt = 'DDD Pic'/>
  </figure>
  <a href='https://github.com/ksherm45/Door-Dash-Derby'>
    <button className='button'>Code</button>
  </a>
  </div>

  <div className="thumbnail">
  <div className='title'>My Portfolio </div>
    <figure>
  <img src={PortfolioPic} height={250} width={200} alt = 'DDD Pic'/>
  </figure>
  <a href='https://github.com/ksherm45/my-portfolio'>
    <button className='button'>Code</button>
  </a>
  </div>



  </div>;


}

export default Projects;
