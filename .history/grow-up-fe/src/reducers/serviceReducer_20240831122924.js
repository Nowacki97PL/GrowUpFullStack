import {
	TRAINER_LIST_REQUEST,
    TRAINER_LIST_SUCCESS,
    TRAINER_LIST_FAIL
} from "../constants/serviceConstants";


export const trainerListReducers = (state = { trainers: []}, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { loading: true, products: [] };

		case PRODUCT_LIST_SUCCESS:
			return {
				loading: false,
				trainers: action.payload.trainers,
			};

		case PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};