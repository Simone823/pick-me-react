import {configureStore } from '@reduxjs/toolkit';

import apiReducer from '../redux/reducers/api';

// import cart reducer
import cartReducer from '../redux/reducers/cart';

// store
const store = configureStore({
    reducer: {
        photos: apiReducer,
        cartShop: cartReducer
    }
});

// export store
export default store;