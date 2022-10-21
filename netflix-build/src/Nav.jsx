import React, { useState, useEffect } from 'react';
import './Nav.css'

function Nav() {
  const [show, setshow] = useState(false);

  const transitionNavbar = () => {
    if(window.scrollY > 100){
      setshow(true);
    }else{
      setshow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return() => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return( 
  <div className={`nav ${show && "nav_black"}`}>
  <div className='nav_content'>
  <img 
  className='nav_logo'
  src='https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo-700x394.png' 
  alt='Netflix Logo'
  />

  <img 
  className='nav_avatar'
  src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117' 
  alt=''
  />
  </div>
  </div>
  )
}

export default Nav