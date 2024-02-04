import axios from 'axios'
import {CART_ADD_ITEM} from '../constants/cartConstans'

export const addToCart = (id, qty) => async (dispatch, get)