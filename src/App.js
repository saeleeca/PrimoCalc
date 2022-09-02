import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import Calculator from './pages/calculator';
import Contact from './pages/contact';

function App() {
return (
 
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/calculator' element={<Calculator/>} />
		<Route path='/contact' element={<Contact/>} />
	</Routes>
	</Router>

);
}

export default App;
