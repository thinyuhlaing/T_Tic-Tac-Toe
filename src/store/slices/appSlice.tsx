import { createSlice } from "@reduxjs/toolkit";

interface AppSlice {
  isLoading: boolean;
  error: string | null;
}
const initialState: AppSlice = {
  isLoading: false,
  error: null,
};
export const appSlice = createSlice({
  name: "",
  initialState: [],
  reducers: {},
});

export default appSlice.reducer;
