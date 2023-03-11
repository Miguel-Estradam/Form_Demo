import React from 'react';
import Logo from '../assets/img/logo.png';

function Header() {
  return (
    <div className='container-fluid header'>
      
      <img src={Logo} className="logo" alt="logo" />
      
      
    </div>
  );
}

export default Header;