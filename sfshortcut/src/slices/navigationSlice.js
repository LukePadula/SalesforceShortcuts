import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { onRestoreFullSearchResults } from "./shortcutSlice";
import {
  homeViewLabel,
  shortcutListViewLabel,
} from "../app/utilities/predefinedVariables";

const initialState = {
  navigationPage: homeViewLabel,
  alertModal: null,
  timeoutId: null,
  url: null,
  homePageFilter: 0,
};

export const handleNavigationChange = createAsyncThunk(
  "navigation/changeNavigationPage",
  async (newPage, { dispatch }) => {
    if (newPage !== shortcutListViewLabel) {
      dispatch(clearAlertModal());
      dispatch(onRestoreFullSearchResults());
    }
    dispatch(setNavigationPage(newPage));
  }
);

export const displayAlertModal = createAsyncThunk(
  "navigation/displayAlertModal",
  async (payload, { dispatch, getState }) => {
    const { timeoutId } = getState().navigation;

    // Clear previous timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    dispatch(setAlertModal(payload));

    const newTimeoutId = setTimeout(() => {
      dispatch(clearAlertModal());

      setTimeout(() => {
        dispatch(resetAlertModal());
      }, 180);
    }, 2000);

    dispatch(setTimeoutId(newTimeoutId));
  }
);

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setNavigationPage: (state, action) => {
      if (action.payload != shortcutListViewLabel && state.timeoutId) {
        clearTimeout(state.timeoutId);
        state.alertModal = null;
      }
      state.homePageFilter = 0;
      state.navigationPage = action.payload;
    },
    setAlertModal: (state, action) => {
      state.alertModal = action.payload;
      state.isClosing = false;
    },
    clearAlertModal: (state) => {
      state.isClosing = true;
    },
    resetAlertModal: (state) => {
      state.alertModal = null;
      state.isClosing = false;
    },
    setTimeoutId: (state, action) => {
      state.timeoutId = action.payload;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    setHomepageFilter: (state, action) => {
      state.homePageFilter = action.payload;
    },
  },
});

export const {
  setNavigationPage,
  setAlertModal,
  clearAlertModal,
  setTimeoutId,
  setUrl,
  setHomepageFilter,
  resetAlertModal,
} = navigationSlice.actions;
export const selectNavigationPage = (state) => state.navigation.navigationPage;
export const selectAlertModal = (state) => state.navigation.alertModal;
export const selectCurrentUrl = (state) => state.navigation.url;
export const selectHomePageFilter = (state) => state.navigation.homePageFilter;
export const selectIsClosing = (state) => state.navigation.isClosing;
export default navigationSlice.reducer;
