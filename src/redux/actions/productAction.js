import { productActions } from '../reducers/productReducer';

const getProducts = (searchQuery) => {
	return async (dispatch) => {
		let url = `https://my-json-server.typicode.com/eunbyulcheon/hnm-basic-clone-project/products?q=${searchQuery}`;
		let response = await fetch(url);
		let data = await response.json();
		dispatch(productActions.getAllProducts({ data }));
	};
};

const getProductDetail = (id) => {
	return async (dispatch) => {
		let url = `https://my-json-server.typicode.com/eunbyulcheon/hnm-basic-clone-project/products/${id}`;
		let response = await fetch(url);
		let data = await response.json();
		dispatch(productActions.getProductDetail({ data }));
	};
};

export const productAction = { getProducts, getProductDetail };
