import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface type {
  number: number;
  toShow: string;
}

const value = [
  { number: 1, toShow: "" },
  { number: 2, toShow: "" },
  { number: 3, toShow: "" },
  { number: 4, toShow: "" },
  { number: 5, toShow: "" },
  { number: 6, toShow: "" },
  { number: 7, toShow: "" },
  { number: 8, toShow: "" },
  { number: 9, toShow: "" },
];
interface AppSlice {
  Xnumbers: number[];
  Onumbers: number[];

  values: { number: number; toShow: string }[];
  isLoading: boolean;
  error: string | null;
}
const initialState: AppSlice = {
  Xnumbers: [],
  Onumbers: [],
  values: [],
  isLoading: false,
  error: null,
};
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addXnumbers: (state, action: PayloadAction<number>) => {
      state.Xnumbers = [...state.Xnumbers, action.payload];
    },
    addOnumbers: (state, action: PayloadAction<number>) => {
      state.Onumbers = [...state.Onumbers, action.payload];
    },
    addValues: (state, action: PayloadAction<type>) => {
      state.values = state.values.map((item) =>
        item.number === action.payload.number
          ? { ...item, toShow: action.payload.toShow } // Update the 'toShow' property of the matching item
          : item
      );
    },
    setValues: (state) => {
      state.values = [...value];
    },
    setRestart: (state) => {
      state.values = [...value];
      state.Xnumbers = [];

      state.Onumbers = [];
    },
  },
});
export const { addXnumbers, addOnumbers, addValues, setValues, setRestart } =
  appSlice.actions;
export default appSlice.reducer;
