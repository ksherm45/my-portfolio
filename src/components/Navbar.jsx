import React from 'react';
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import Headroom from "react-headroom";



require('../App.css')

function Navbar() {
  return (
  <Headroom>
  <div className='Navbar'>
  
  <HashLink className="Link" smooth to="/#info">
      <text className="NavTitle">About Me</text>
  </HashLink>

<HashLink className="Link" smooth to="/#projects">
      <text className="NavTitle">Projects</text>
</HashLink>

<HashLink className="Link" smooth to="/#contact">
      <text className="NavTitle">Contact</text>
</HashLink>    
  </div>
  </Headroom>
  )}



export default Navbar;
