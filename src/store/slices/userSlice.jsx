import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      role: "isPartner",
      // isCustomer: true,
      // isPartner: false,
      // isAdmin: false,
    },
  },
});
export const { user } = userSlice.actions;
export default userSlice.reducer;
