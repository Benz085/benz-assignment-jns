// third-party
import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { PlacesInterFace } from "../../../types/places";
// types

const MAIN_NAME: string = "SET_PLACES_lIST/DATA";

const initialState: PlacesInterFace = {
  data: {
    html_attributions: [],
    next_page_token: "",
    results: [],
    status: "",
  },
  isLoading: true,
};

const slice = createSlice({
  name: MAIN_NAME,
  initialState,
  reducers: {
    setPlacesListData(state, action) {
      state.data = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

export function setPlacesListDataAction(payload: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.setPlacesListData(payload));
  };
}

export function setIsLoadingAction(payload: boolean) {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.setIsLoading(payload));
  };
}