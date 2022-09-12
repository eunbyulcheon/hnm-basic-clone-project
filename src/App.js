import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Detail from './page/Detail';
import Login from './page/Login';
import Products from './page/Products';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/products" element={<Products />} />
				<Route path="/products/:id" element={<Detail />} />
			</Routes>
		</>
	);
};

export default App;

// 1. 전체상품 페이지, 로그인 페이지, 상품상세페이지
// 2. 전체상품 페이지에서는 전체 상품을 볼 수 있다
// 3. 로그인 클릭하면 로그인 페이지로 이동
// 3. 상품디테일을 눌렀으나, 로그인이 안되어있을 경우에는 로그인페이지가 먼저 나온다.
// 5. 로그인이 되어 있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 5. 로그아웃 클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일페이지를 볼 수 없다, 다시 로그인 페이지가 보인다.
// 8. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
