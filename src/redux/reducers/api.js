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
    },
    query: ''
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
        },

        setQuery: (state, action) => {
            state.query = action.payload;
        }
    }
});

// actions apiSlice
const { startLoading, stopLoading, saveData, errorCatch, rateLimiter, setQuery } = apiSlice.actions;

// fetch data api
const fetchData = (path) => (dispatch) => {
    // reset
    dispatch(startLoading());

    // intance get
    instance.get(path)
    .then((res) => {
        // controllo se esiste res, data dopiche se la lunghezza di results è 0 dispatch error 
        if(res?.data?.results.length === 0) {
            dispatch(errorCatch('Errore! Nessuna foto trovata'));
        }

        dispatch(saveData(res.data.results));
        dispatch(rateLimiter({
            total: res.headers['x-ratelimit-limit'],
            remaining: res.headers['x-ratelimit-remaining']
        }));
        dispatch(stopLoading());
    })
    .catch((err) => {
        dispatch(errorCatch(err.message));
        dispatch(stopLoading());
    })
}
export {fetchData, setQuery};

// export reducers apiSlice
const {reducer} = apiSlice;
export default reducer;