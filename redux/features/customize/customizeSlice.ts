import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomizationState {
  size: number;
  fontSize: number | null;
  color: string;
  letterSpacing: string;
  fontFamily: string;
  headingFontSize: number;
  lineHeight: number;
  tracking: number;
  layout: "gridRight" | "gridLeft" | "list";
}


interface IcustomizationSlice {
  customize: CustomizationState;
  isSidebarCollapse: boolean;
}

const initialState: IcustomizationSlice = {
  customize: {
    tracking: 0,
    lineHeight: 150,
    color: "#a3a3a3",
    fontFamily: "Arial",
    fontSize: null,
    headingFontSize: 1,
    letterSpacing: "",
    size: 100,
    layout: "list",
  },
  isSidebarCollapse: false,
};

const customizationSlice = createSlice({
  name: "resumeStyle",
  initialState,
  reducers: {
    updateCustomization: (
      state,
      action: PayloadAction<Partial<CustomizationState>>
    ) => {
      state.customize = { ...state.customize, ...action.payload };
    },
   
    setSize: (state, action: PayloadAction<number>) => {
      state.customize.size = action.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarCollapse = !state.isSidebarCollapse;
    },
  },
});

export const { setSize, toggleSidebar, updateCustomization } =
  customizationSlice.actions;

export default customizationSlice.reducer;
