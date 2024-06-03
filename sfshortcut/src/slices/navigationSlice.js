import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  navigationPage: "Home",
  alertModal: null,
  timeoutId: null,
  url: null,
};

export const handleNavigationChange = createAsyncThunk(
  "navigation/changeNavigationPage",
  async (newPage, { dispatch }) => {
    if (newPage !== "List") {
      dispatch(clearAlertModal());
    }
    dispatch(setNavigationPage(newPage));
  }
);

export const displayAlertModal = createAsyncThunk(
  "navigation/displayAlertModal",
  async (payload, { dispatch, getState }) => {
    const { timeoutId } = getState().navigation;

    // Clear the previous timeout if it exists
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    dispatch(setAlertModal(payload));

    const newTimeoutId = setTimeout(() => {
      dispatch(clearAlertModal());
    }, 3500);

    // Store the new timeout ID in the state
    dispatch(setTimeoutId(newTimeoutId));
  }
);

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setNavigationPage: (state, action) => {
      console.log(action.payload);
      if (action.payload != "List" && state.timeoutId) {
        console.log("CLEAR");
        clearTimeout(state.timeoutId);
        state.alertModal = null;
      }
      state.navigationPage = action.payload;
    },
    setAlertModal: (state, action) => {
      const { alertName, newValue } = action.payload;

      state.alertModal = action.payload;
    },
    clearAlertModal: (state, action) => {
      state.alertModal = null;
    },
    setTimeoutId: (state, action) => {
      state.timeoutId = action.payload;
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const {
  setNavigationPage,
  setAlertModal,
  clearAlertModal,
  setTimeoutId,
  setUrl,
} = navigationSlice.actions;
export const selectNavigationPage = (state) => state.navigation.navigationPage;
export const selectAlertModal = (state) => state.navigation.alertModal;

export default navigationSlice.reducer;
