import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
    cart: !localStorage.getItem('cart') ? localStorage.setItem('cart', '[]') : JSON.parse(localStorage.getItem('cart')),
    total: !localStorage.getItem('total') ? localStorage.setItem('total', 0) : JSON.parse(localStorage.getItem('total'))
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
        }
    }
});

const { addToCart } = cartSlice.actions;

export { addToCart };

const {reducer} = cartSlice;
export default reducer;