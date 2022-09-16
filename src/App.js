import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Login from './page/Login';
import Products from './page/Products';
import PrivateRoute from './route/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
	const [auth, setAuth] = useState(false);

	return (
		<>
			<Navbar auth={auth} setAuth={setAuth} />
			<Routes>
				<Route path="/login" element={<Login setAuth={setAuth} />} />
				<Route path="/" element={<Products />} />
				<Route path="/products/:id" element={<PrivateRoute auth={auth} />} />
			</Routes>
		</>
	);
};

export default App;
