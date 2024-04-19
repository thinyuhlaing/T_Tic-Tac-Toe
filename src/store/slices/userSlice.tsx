import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AppSlice {
  Xuser: string;
  Ouser: string;
  isLoading: boolean;
  error: string | null;
}
const initialState: AppSlice = {
  Xuser: "",
  Ouser: "",
  isLoading: false,
  error: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setXuser: (state, action: PayloadAction<string>) => {
      state.Xuser = action.payload;
    },
    setOuser: (state, action: PayloadAction<string>) => {
      state.Ouser = action.payload;
    },
  },
});
export const { setXuser, setOuser } = userSlice.actions;
export default userSlice.reducer;
