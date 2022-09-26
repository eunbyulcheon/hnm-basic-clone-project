const getProducts = (searchQuery) => {
	return async (dispatch) => {
		let url = `https://my-json-server.typicode.com/eunbyulcheon/hnm-basic-clone-project/products?q=${searchQuery}`;
		let response = await fetch(url);
		let data = await response.json();
		dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
	};
};

const getProductDetail = (id) => {
	return async (dispatch) => {
		let url = `https://my-json-server.typicode.com/eunbyulcheon/hnm-basic-clone-project/products/${id}`;
		let response = await fetch(url);
		let data = await response.json();
		dispatch({ type: 'GET_PRODUCT_DETAIL', payload: { data } });
	};
};

export const productAction = { getProducts, getProductDetail };
