import {createSlice} from '@reduxjs/toolkit';

// import instance custom axios
import instance from '../../api';

// initial state api
const initialState = {
    loading: true,
    error: {
        status: false,
        message: ''
    },
    photos: [],
    rateLimit: {
        remaining: undefined,
        total: undefined
    }
};

// api slice
const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loading = true;
            state.error.status = false;
            state.error.message = "";
            state.photos = [];
        },

        stopLoading: (state) => {
            state.loading = false;
        },

        saveData: (state, action) => {
            state.photos = action.payload;
        },

        errorCatch: (state, action) => {
            state.error.status = true;
            state.error.message = action.payload;
        },

        rateLimiter: (state, action) => {
            state.rateLimit = {...action.payload};
        }
    }
});

// actions apiSlice
const { startLoading, stopLoading, saveData, errorCatch, rateLimiter } = apiSlice.actions;

// fetch data api
const fetchData = (path) => (dispatch) => {
    dispatch(startLoading);

    // intance get
    instance.get(path)
    .then((res) => {
        dispatch(saveData(res.data));
        dispatch(rateLimiter({
            total: res.headers['x-ratelimit-limit'],
            remaining: res.headers['x-ratelimit-remaining']
        }));
        dispatch(stopLoading());
    })
    .catch((err) => {
        dispatch(errorCatch(err.errors));
        dispatch(stopLoading());
    })
}
export {fetchData};

// export reducers apiSlice
const {reducer} = apiSlice;
export default reducer;