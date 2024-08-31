import axios from "axios";
import {
	TRAINER_LIST_REQUEST,
	TRAINER_LIST_SUCCESS,
	TRAINER_LIST_FAIL,
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
					: error.message,  // Poprawiona literówka
		});
	}
};
