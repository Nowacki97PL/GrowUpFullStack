import {
	TR
} from "../constants/serviceConstants";


export const productListReducers = (state = { products: [], page: 1, pages: 1 }, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { loading: true, products: [] };

		case PRODUCT_LIST_SUCCESS:
			return {
				loading: false,
				products: action.payload.products,
				page: action.payload.page,
				pages: action.payload.pages,
			};

		case PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};