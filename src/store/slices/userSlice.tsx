import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AppSlice {
  XPlayer: string;
  OPlayer: string;
  isLoading: boolean;
  error: string | null;
}
const initialState: AppSlice = {
  XPlayer: "",
  OPlayer: "",
  isLoading: false,
  error: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setXPlayer: (state, action: PayloadAction<string>) => {
      state.XPlayer = action.payload;
    },
    setOPlayer: (state, action: PayloadAction<string>) => {
      state.OPlayer = action.payload;
    },
  },
});
export const { setXPlayer, setOPlayer } = userSlice.actions;
export default userSlice.reducer;
