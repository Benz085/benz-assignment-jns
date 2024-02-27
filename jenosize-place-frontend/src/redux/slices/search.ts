// third-party
import { createSlice } from '@reduxjs/toolkit';
import { SearchInterFace } from '../../../types';
import { AppDispatch } from '../store';
// types

const MAIN_NAME: string = 'SET_SEARCH_QUERY';

const initialState: SearchInterFace = {
  search: '',
};

const slice = createSlice({
  name: MAIN_NAME,
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export function setSearchAction(payload: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.setSearch(payload));
  };
}