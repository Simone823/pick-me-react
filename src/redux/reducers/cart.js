import { createSlice } from "@reduxjs/toolkit";

// localStorage
if(!localStorage.getItem('cart')) {
    localStorage.setItem('cart', '[]');
} else if(!localStorage.getItem('total')) {
    localStorage.setItem('total', 0);
}

// initial state
const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')),
    total: localStorage.getItem('total')
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if(state.cart.length === 0) {
                state.cart.push(action.payload);
            } else {
                // find item
                let findItem = state.cart.find(el => el.id === action.payload.id);
                
                if(findItem === undefined) {
                    state.cart.push(action.payload);
                }
            }

            // set item localStorage
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },

        removeToCart: (state, action) => {
            state.cart = state.cart.filter((el) => el.id !== action.payload);

            // set cart localStorage
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
    }
});

const { addToCart, removeToCart} = cartSlice.actions;

export { addToCart, removeToCart };

const {reducer} = cartSlice;
export default reducer;