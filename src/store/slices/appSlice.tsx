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
  numbers: number[];
  values: { number: number; toShow: string }[];

  isLoading: boolean;
  error: string | null;
}
const initialState: AppSlice = {
  numbers: [],
  values: [],
  isLoading: false,
  error: null,
};
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addNumbers: (state, action: PayloadAction<number>) => {
      state.numbers = [...state.numbers, action.payload];
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
  },
});
export const { addNumbers, addValues, setValues } = appSlice.actions;
export default appSlice.reducer;
