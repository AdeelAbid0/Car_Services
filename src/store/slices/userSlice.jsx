import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      role: "isSuperAdmin",
      // isCustomer,
      // isPartner,
      // isAdmin:,
      // isSuperAdmin:
    },
  },
});
export const { user } = userSlice.actions;
export default userSlice.reducer;
