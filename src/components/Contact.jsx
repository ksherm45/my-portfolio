import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Contact() {
  return( <div>
    <body className='iconContainer'>
      <div >Work With Me! </div> 
      <div >Code With Me!</div> 
      <div >Follow Me!</div> 
    </body>
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
       </div>

  )}



export default Contact;
