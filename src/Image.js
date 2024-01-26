import React from 'react';
import logo from './KONGU.png' // Tell webpack this JS file uses this image

console.log(logo); 

function Header() {
  // Import result is the URL of your image
  return( 
    <div style={{ textAlign: 'center', margin: '20px'}}>
  <img src={logo} alt="Logo" />
  </div>
  )
}

export default Header;