import React, { Component } from 'react';
import {useHistory}  from 'react-router-dom';
import Logo from "./Images/Sister.png";
import './style.css';



function Header() {
  
  const history = useHistory();
  console.log(history)

   return(

    <div>
      {history.location.pathname!== "/"&&(
                
       <div className="HeaderBk">
         <div className="homebod">
            <img className="LogoLogo"src={Logo} alt="" width="240" height="145"/>
         </div>
       </div>
    
   )}
     </div>
  

 )
  };


export default Header;