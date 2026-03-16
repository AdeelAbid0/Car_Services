import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      role: "iscustomer",
      // isCustomer,
      // isPartner,
      // isAdmin:,
      // isSuperAdmin:
    },
  },
});
export const { user } = userSlice.actions;
export default userSlice.reducer;
