export const toggleCartHidden = () => ({
    type : 'TOGGLE_CART_HIDDEN'
});

export const addItemToCart = item => ({
    type : 'ADD_ITEM_TO_CART',
    payload : item
})

export const clearItemFromCheckout = item => ({
    type : 'CLEAR_ITEM_FROM_CHECKOUT',
    payload : item
})

export const removeItemFromCheckout = item => ({
    type : 'REMOVE_ITEM_FROM_CHECKOUT',
    payload : item
})