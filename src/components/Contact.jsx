import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Contact() {
  return(
     <div>
    
      <div className='iconContainer'>
      <SocialIcon
              url="https://www.linkedin.com/in/kaj-bjoern-sherman/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 65, width: 65 }}
            />
      
      <SocialIcon
              url="https://github.com/ksherm45"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 65, width: 65 }}
            />

       <SocialIcon
              url="https://www.instagram.com/ksherm45/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 65, width: 65 }}
            />
       </div>

       <body className='iconContainer'>
      <div >Work! </div> 
      <div >Code!</div> 
      <div >Follow!</div> 
    </body>

       </div>

  )}



export default Contact;
