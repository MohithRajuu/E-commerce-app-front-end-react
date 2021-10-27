import { addItem, removeItem } from './cart.utils'

const INITIAL_STATE = {
    hidden : true,
    cartItems : []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'TOGGLE_CART_HIDDEN':
            return{
                ...state,
                hidden : !state.hidden
            }
        case 'ADD_ITEM_TO_CART':
            return{
                ...state,
                cartItems : addItem(state.cartItems, action.payload)
            }
        case 'CLEAR_ITEM_FROM_CHECKOUT' :
            return{
                ...state,
                cartItems : state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case 'REMOVE_ITEM_FROM_CHECKOUT':
            return{
                ...state,
                cartItems : removeItem(state.cartItems, action.payload)
            }
        default : 
            return state;
    }
}

export default cartReducer;