import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Login from './page/Login';
import Products from './page/Products';
import PrivateRoute from './route/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/" element={<Products />} />
				<Route path="/products/:id" element={<PrivateRoute />} />
			</Routes>
		</>
	);
};

export default App;
