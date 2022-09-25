const getProducts = (searchQuery) => {
	return async (dispatch, getState) => {
		let url = `https://my-json-server.typicode.com/eunbyulcheon/hnm-basic-clone-project/products?q=${searchQuery}`;
		let response = await fetch(url);
		let data = await response.json();
		dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
	};
};

export const productAction = { getProducts };
