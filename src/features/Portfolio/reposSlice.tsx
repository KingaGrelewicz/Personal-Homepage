import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Repo, ReposState } from "../../types/types";

const initialState: ReposState = {
  loading: false,
  error: null,
  data: [],
};

type FetchReposFailurePayload = string;
type FetchReposSuccessPayload = Repo[];

const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    setRepos: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchReposFailure: (
      state,
      action: PayloadAction<FetchReposFailurePayload>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchReposSuccess: (
      state,
      action: PayloadAction<FetchReposSuccessPayload>
    ) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const { setRepos, fetchReposFailure, fetchReposSuccess } =
  reposSlice.actions;

export const selectReposState = (state: RootState): Repo[] => state.repos.data;
export const selectLoadingState = (state: RootState): boolean =>
  state.repos.loading;
export const selectErrorState = (state: RootState): string | null =>
  state.repos.error;

export default reposSlice.reducer;
