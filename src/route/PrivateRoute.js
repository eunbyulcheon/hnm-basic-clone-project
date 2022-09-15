import React from 'react';
import { Navigate } from 'react-router-dom';
import Detail from '../page/Detail';

const PrivateRoute = ({ auth }) => {
	return auth === true ? <Detail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
