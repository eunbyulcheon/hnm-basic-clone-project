import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Detail from './page/Detail';
import Login from './page/Login';
import Products from './page/Products';

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/:id" element={<Detail />} />
			</Routes>
		</>
	);
};

export default App;
