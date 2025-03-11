import { createSlice } from "@reduxjs/toolkit";

interface ResumeModeState {
  editMode: boolean;
}

const initialState: ResumeModeState = {
  editMode: true,
};

const resumeModeSlice = createSlice({
  name: "resumeMode",
  initialState,
  reducers: {
    toggleEditMode: (state) => {
      state.editMode = !state.editMode;
    },
  },
});

export const { toggleEditMode } = resumeModeSlice.actions;
export default resumeModeSlice.reducer;
