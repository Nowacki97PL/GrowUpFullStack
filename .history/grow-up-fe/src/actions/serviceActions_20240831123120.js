import axios from "axios";
import {
	TRAINER_LIST_REQUEST,
	TRAINER_LIST_SUCCESS,
	TRAINER_LIST_FAIL,
} from "../constants/serviceConstants";


export const listProducts =
	(keyword = "", page = 1) =>
	async (dispatch) => {
		try {
			dispatch({ type: PRODUCT_LIST_REQUEST });

			const { data } = await axios.get(
				`/api/products?keyword=${keyword}&page=${page}`
			);

			dispatch({
				type: PRODUCT_LIST_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: PRODUCT_LIST_FAIL,
				payload:
					error.response && error.response.data.detail
						? error.response.data.detail
						: error.massage,
			});
		}
	};