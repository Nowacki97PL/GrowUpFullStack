import axios from 'axios'
import {CART_ADD_ITEM} from '../constants/cartConstans'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products`)
}