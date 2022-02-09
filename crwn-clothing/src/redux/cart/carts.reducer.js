
import CartActionTypes from './cart.types.js';

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
                    cartItems: [...state.cartItems, action.payload]
                };
            default:
                return state;
    }
}

export default cartReducer;