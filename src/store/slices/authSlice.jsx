import { createSlice } from "@reduxjs/toolkit";

// Hardcoded user for testing
const hardcodedUser = {
  id: 1,
  name: "Adeel Abid",
  email: "adeel@example.com",
  role: "partner",
};

const hardcodedToken = "test-token-123456";

const initialState = {
  user: (() => {
    try {
      const userData = localStorage.getItem("user");
      if (!userData) {
        // Set hardcoded user if no user exists
        localStorage.setItem("user", JSON.stringify(hardcodedUser));
        return hardcodedUser;
      }
      return JSON.parse(userData);
    } catch (error) {
      console.error("Invalid user data in localStorage, clearing...");
      localStorage.removeItem("user");
      localStorage.setItem("user", JSON.stringify(hardcodedUser));
      return hardcodedUser;
    }
  })(),
  token: (() => {
    const tokenData = localStorage.getItem("token");
    if (!tokenData) {
      // Set hardcoded token if no token exists
      localStorage.setItem("token", hardcodedToken);
      return hardcodedToken;
    }
    return tokenData;
  })(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;

      // persist to localStorage
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.clear();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
