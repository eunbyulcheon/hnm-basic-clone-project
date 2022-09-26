import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Detail from '../page/Detail';

const PrivateRoute = () => {
	const auth = useSelector((state) => state.auth.authenticate);
	return auth === true ? <Detail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
