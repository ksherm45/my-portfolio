import React from 'react';
import {Link} from 'react-router-dom'
require('../App.css')

function Navbar() {
  return (
  <div className='Navbar'>
    <Link className='Link' to="/">Home</Link>    
	<Link  className='Link' to="/Projects">Projects</Link>
	<Link className='Link' to="/Contact">Contact</Link>
    
  </div>
  )}



export default Navbar;
