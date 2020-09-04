import React, { Component } from 'react';
import {useHistory}  from 'react-router-dom';
import Logo from "./Images/Sister1.jpg";
import './style.css';



function Header() {
  
  const history = useHistory();
  console.log(history)

   return(

    <div>
      {history.location.pathname!== "/"&&(
                
       <div className="HeaderBk">
         <div className="homebod">
            <img className="LogoLogo"src={Logo} alt="" width="270" height="160"/>
         </div>
       </div>
    
   )}
     </div>
  

 )
  };


export default Header;