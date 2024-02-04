import { CART_ADD_ITEM } from '../constants/cartConstans'



export const cartReducer = (state = { cartItems: [] }, ac) => {
    switch (action.type) {
        case CART_ADD_ITEM:

        default:
            return state
    }
}