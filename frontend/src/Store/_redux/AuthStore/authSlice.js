import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  loginUser: null,
};
export const callTypes = {
  list: "list",
  action: "action",
};
//State işlemleri için
export const Slice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.payload.err}`;
      console.log(action.payload)
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
        state.actionsLoading = false;
      } else {
        state.actionsLoading = false;
        state.listLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
        state.actionsLoading2 = true;
      }
    },
    login:(state,action)=>{
      state.error = null;
      state.loginUser = action.payload;
    },
    setToken:(state,action)=>{
      state.error = null;
      state.token = action.payload;
    },
    logOut: (state, action) => {
      localStorage.clear();
      return initialState;
    },
  },
});
