import React, { Component } from 'react';
import {useHistory}  from 'react-router-dom';
import footer from "./Images/footer.jpg"
import './style.css';



function Footer() {
     const history = useHistory();
     console.log(history)
  
     return(

          <div>
            {history.location.pathname!== "/"&&(
                      
                      <div className="footerImg">
                      <img src={footer} alt="" width="1260px" height=""/>
                 </div>
              
          
         )}
           </div>
        
      
       )
   
  };


export default Footer;