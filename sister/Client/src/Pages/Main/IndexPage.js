import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';


function MainPage(){
    return(

         <div className="indexWrap">

             <div  className="indexCard">
               <Button><p>log In</p></Button>
               <Button><p>Sign In</p></Button>
               <Button><p>About Us</p></Button>
             </div>
         

         </div>


    );
}

export default MainPage;