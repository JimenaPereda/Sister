import React, { Component } from 'react';
import Logo from "./Images/logo.jpg"
import './style.css';



function Header() {
  
      return (
        
       <div className="homebod">
            <img src={Logo} alt="" width="274" height="161"/>
       </div>
    
      );
   
  };


export default Header;