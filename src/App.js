import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Login from './page/Login';
import Products from './page/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './route/PrivateRoute';

const App = () => {
	const [auth, setAuth] = useState(false);

	useEffect(() => {
		console.log('aaa', auth);
	}, [auth]);

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/login" element={<Login setAuth={setAuth} />} />
				<Route path="/" element={<Products />} />
				<Route path="/products/:id" element={<PrivateRoute auth={auth} />} />
			</Routes>
		</>
	);
};

export default App;
