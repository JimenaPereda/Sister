import React, { Component } from 'react';
import {useHistory}  from 'react-router-dom';
import Logo from "./../Images/SISTER.png"
import './style.css';



function Header() {
  
  const history = useHistory();
  console.log(history)

   return(

    <div>
      {history.location.pathname!== "/"&&(
                
       <div className="homebod">
       <img src={Logo} alt="" width="274" height="161"/>
    </div>
    
   )}
     </div>
  

 )
  };


export default Header;