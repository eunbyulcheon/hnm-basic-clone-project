const login = ({ id, pw }) => {
	return (dispatch) => {
		dispatch({ type: 'LOGIN_SUCCESS', payload: { id, pw } });
	};
};

const logout = (auth) => {
	return (dispatch) => {
		dispatch({ type: 'LOGOUT', payload: { auth } });
	};
};

export const authenticateAction = { login, logout };
