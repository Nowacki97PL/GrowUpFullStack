import axios from "axios";
import {
	TRAINER_LIST_REQUEST,
	TRAINER_LIST_SUCCESS,
	TRAINER_LIST_FAIL,
	BOOK_TRAINING_SESSION_REQUEST,
	BOOK_TRAINING_SESSION_SUCCESS,
	BOOK_TRAINING_SESSION_FAIL,
	SESSION_LIST_REQUEST,
	SESSION_LIST_SUCCESS,
	SESSION_LIST_FAIL,
	SESSION_DELETE_REQUEST
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

        dispatch({ type: BOOK_TRAINING_SESSION_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: BOOK_TRAINING_SESSION_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        });
    }
};


export const listSessions = () => async (dispatch) => {
	try {
		dispatch({ type: SESSION_LIST_REQUEST });

		const { data } = await axios.get(`/api/services/sessions`);

		dispatch({
			type: SESSION_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: SESSION_LIST_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};

export const deleteSession = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: SESSION_DELETE_REQUEST_DELETE_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.delete(`/api/users/delete/${id}`, config);

		dispatch({
			type: USER_DELETE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_DELETE_FAIL,
			payload:
				error.response && error.response.data.detail
					? error.response.data.detail
					: error.message,
		});
	}
};