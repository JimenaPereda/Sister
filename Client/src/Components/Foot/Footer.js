import React  from 'react';
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
                      <img className="footerImgI" src={footer}/>
                 </div>
              
          
         )}
           </div>
        
      
       )
   
  };


export default Footer;