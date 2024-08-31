import axios from "axios";
import {
	TRAINER_LIST_REQUEST,
	TRAINER_LIST_SUCCESS,
	TRAINER_LIST_FAIL,
	BOOK_TRAINING_SESSION_REQUEST,
	BOOK_TRAINING_SESSION_SUCCESS,
	BOOK_TRAINING_SESSION_FAIL
} from "../constants/serviceConstants";

export const listTrainers = () => async (dispatch) => {
	try {
		dispatch({ type: TRAINER_LIST_REQUEST });

		const { data } = await axios.get(`/api/services/trainers`);

		dispatch({
			type: TRAINER_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: TRAINER_LIST_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const bookTrainingSession = (sessionTrainingData) => async (dispatch, getState) => {
    try {
        dispatch({ type: BOOK_TRAINING_SESSION_REQUEST });

        const { userLogin: { userInfo } } = getState();
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.post('/api/services/sessions/book/', sessionTrainingData, config);

        dispatch({ type: BOOK_SESSION_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: BOOK_SESSION_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        });
    }
};