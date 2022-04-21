import React from 'react';
import Kajio from '../images/Kajio.PNG'
import DDD from '../images/DDD.PNG'
import { Link } from 'react-router-dom';


function Projects() {
  return <div className='Projects'>
  
  <div className="thumbnail">
  <figure>
  <a href='https://kajio.herokuapp.com/landingpage'>
  <img src={Kajio} height={250} width={200} alt = 'Kajio Pic'/>
  </a>
    
      <div className='caption'>
      Social Media App!
      </div>
  </figure>
  <p className='ProjectDesc'>fddddddddddddddddd</p>
</div>


  <div className="thumbnail">
    <figure>
  <img src={DDD} height={250} width={200} alt = 'DDD Pic'/>
      <div>
      Axis Collision Game!
      </div>
  </figure>
  </div>


  </div>;


}

export default Projects;
