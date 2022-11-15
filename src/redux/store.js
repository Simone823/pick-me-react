import {configureStore } from '@reduxjs/toolkit';

import apiReducer from '../redux/reducers/api';

// store
const store = configureStore({
    reducer: {
        photos: apiReducer,
    }
});

// export store
export default store;