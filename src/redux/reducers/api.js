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
    query: '',
    pagination: {
        total: null,
        total_pages: null,
        currentPage: 1,
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
            state.pagination.total = null;
            state.pagination.total_pages = null;
        },

        stopLoading: (state) => {
            state.loading = false;
        },

        saveData: (state, action) => {
            state.photos = action.payload.photos;
            state.pagination.total = action.payload.total;
            state.pagination.total_pages = action.payload.total_pages;
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
        },

        updatCurrentPage: (state, action) => {
            state.pagination.currentPage = action.payload;
        }
    }
});

// actions apiSlice
const { startLoading, stopLoading, saveData, errorCatch, rateLimiter, setQuery, updatCurrentPage } = apiSlice.actions;

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

        // save data
        dispatch(saveData({
            photos: res.data.results,
            total: res.data.total,
            total_pages: res.data.total_pages
        }));

        // ratelimiter
        dispatch(rateLimiter({
            total: res.headers['x-ratelimit-limit'],
            remaining: res.headers['x-ratelimit-remaining']
        }));

        // stop loading
        dispatch(stopLoading());
    })
    .catch((err) => {
        dispatch(errorCatch(err.message));
        dispatch(stopLoading());
    })
}

// exports
export { fetchData, setQuery, updatCurrentPage };

// export reducers apiSlice
const {reducer} = apiSlice;
export default reducer;