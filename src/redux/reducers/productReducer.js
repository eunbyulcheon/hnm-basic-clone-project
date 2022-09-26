import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	productList: [],
	productItem: null,
};

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		getAllProducts(state, action) {
			state.productList = action.payload.data;
		},
		getProductDetail(state, action) {
			state.productItem = action.payload.data;
		},
	},
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
