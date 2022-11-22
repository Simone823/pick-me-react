import { createSlice } from "@reduxjs/toolkit";

// localStorage
if(!localStorage.getItem('cart') && !localStorage.getItem('total')) {
    localStorage.setItem('cart', '[]');
    localStorage.setItem('total', '0');
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

        removeAllToCart: (state) => {
            // reset
            state.cart = [];

            // localStorage cart
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    }
});

const { addToCart, removeToCart, removeAllToCart } = cartSlice.actions;

export { addToCart, removeToCart, removeAllToCart };

const {reducer} = cartSlice;
export default reducer;