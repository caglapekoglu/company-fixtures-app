import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

export const callTypes = {
  list: "list",
  action: "action",
};

//State işlemleri için
export const Slice = createSlice({
  name: "item",
  initialState: initialState,
  reducers: {
    
    catchError: (state, action) => {
      state.error = `${action.payload.err}`;

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
    createAsk: (state, action) => {
      state.error = null;
    },
    gets: (state, action) => {
      state.error = null;
      state.items = action.payload;
    },
    updateAll: (state, action) => {
      state.error = null;
      state.items = action.payload;
    },
    update: (state, action) => {
      state.error = null;
      let item = action.payload;
      let index = state.items.map((object) => object.id).indexOf(item.id);
      let items = state.items;
      items[index] = item;
      state.items = items;
    },
    remove: (state, action) => {
      state.error = null;
      let item = action.payload;
      let items = state.items;
      let index = items.map((object) => object.id).indexOf(item.id);
      items.splice(index, 1);
      state.items = items;
    },
    addAll: (state, action) => {
      state.error = null;
      state.items = state.items.concat(action.payload);
    },
    add: (state, action) => {
      state.error = null;
      state.items.push(action.payload);
    },
  },
});
