import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import NavBar from './Components/Nav/Navbar';
import MainPage from './Pages/Main/IndexPage';
import HomeB from './Pages/Home/Home';
import StaySafeW from './Pages/StaySafe/StaySafe';
import WomanA from './Pages/WomenAround/WomenAround';
import ProfilE from './Pages/Profile/Profile';
import Footer from './Components/Foot/Footer';
import './App.css';

function App() {
	

	return (
	
			<Router>
				<div>
				<div className="HeaderBackgrouund">
						<Route exact path={['/Home', '/StaySafe', '/WomanAround', '/Profile']} component={Header} />
						<Route exact path={['/Home', '/StaySafe', '/WomanAround', '/Profile']} component={NavBar} />
					</div>
					  <Switch>
					   <Route exact path="/" component={MainPage} />
					   <Route exact path="/Home" component={HomeB} />
					   <Route exact path="/StaySafe" component={StaySafeW} />
					   <Route exact path="/WomanAround" component={WomanA} />
					   <Route exact path="/Profile" component={ProfilE} />
					  </Switch>
					  <div>
						<Route exact path={['/Home', '/StaySafe', '/WomanAround', '/Profile']} component={Footer} />
					</div>
				</div>
			</Router>
		
	);
}

export default App;
