
import CartActionTypes from './cart.types.js';
import { addItemToCart } from './cart.utils.js';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}
// first make the initial state 
// second make a fundtion with the state set as initial state and an action
//the switch has the action type 'TOGGLE_CART_HIDDEN'
//if this is there then spread the state with hidden with not state hidden
//else return default state 
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
            case CartActionTypes.ADD_ITEM:
                return{
                    ...state,
                    cartItems: addItemToCart(state.cartItems, action.payload)
                };
                case CartActionTypes.CLEAR_ITEM_FROM_CART:
                    return{
                        ...state,
                        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
                    }
            default:
                return state;
    }
}

export default cartReducer;