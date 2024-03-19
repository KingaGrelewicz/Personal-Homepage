import { createSlice } from "@reduxjs/toolkit";

const reposSlice = createSlice({
    name: 'repos',
    initialState: {
        loading: false,
        error: null,
        data: [],
    },
    reducers: {
        setRepos: (state, { payload }) => {
            state.data = payload;
        },
        fetchReposStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchReposFailure: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        fetchReposSuccess: (state, { payload: repos }) => {
            state.loading = false;
            state.data = repos;
        },
    }
});

export const {
    setRepos,
    fetchReposStart,
    fetchReposFailure,
    fetchReposSuccess,
} = reposSlice.actions;


export const selectReposState = state => state.repos.data;

export default reposSlice.reducer;