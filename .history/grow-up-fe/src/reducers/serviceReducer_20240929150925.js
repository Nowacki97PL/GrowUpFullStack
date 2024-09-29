import {
	TRAINER_LIST_REQUEST,
    TRAINER_LIST_SUCCESS,
    TRAINER_LIST_FAIL,
	BOOK_TRAINING_SESSION_REQUEST,
	BOOK_TRAINING_SESSION_SUCCESS,
	BOOK_TRAINING_SESSION_FAIL,
	SESSION_LIST_REQUEST,
	SESSION_LIST_SUCCESS,
	SESSION_LIST_FAIL
} from "../constants/serviceConstants";


export const trainerListReducers = (state = { trainers: []}, action) => {
	switch (action.type) {
		case TRAINER_LIST_REQUEST:
			return { loading: true, products: [] };

		case TRAINER_LIST_SUCCESS:
			return {
				loading: false,
				trainers: action.payload
			};

		case TRAINER_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};

export const sessionTrainingBookReducer = (state = {}, action) => {
    switch (action.type) {
        case BOOK_TRAINING_SESSION_REQUEST:
            return { loading: true };
        case BOOK_TRAINING_SESSION_SUCCESS:
            return { loading: false, success: true, session: action.payload };
        case BOOK_TRAINING_SESSION_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const sessionListReducers = (state = { sessions: []}, action) => {
	switch (action.type) {
		case SESSION_LIST_REQUEST:
			return { loading: true, sessions: [] };

		case SESSION_LIST_SUCCESS:
			return {
				loading: false,
				trainers: action.payload
			};

		case SESSION_LIST_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};