import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from "./Components/Nav/Navbar";
import Header from "./Components/Header/Header";
import HomeB from "./Pages/Home/Home";
import StaySafeW from "./Pages/StaySafe/StaySafe";
import WomanA from "./Pages/WomanAround/WomanAround";
import ProfilE from "./Pages/Profile/Profile";
import Footer from "./Components/Foot/Footer"
import './App.css';

function App() {

  return(
    <Router>
    <div> 
          <div className="header">
          < Header />
          <NavBar />
           </div>
     <Route exact path ="/" component = {HomeB} />
     <Route exact path ="/StaySafe" component = {StaySafeW} />
     <Route exact path ="/WomanAround" component = {WomanA} />
     <Route exact path ="/Profile" component = {ProfilE} />
         
         <div>
           <Footer />
         </div>
    </div>
     </Router>
    );
}

export default App;

