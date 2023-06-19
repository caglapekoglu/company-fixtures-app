import { persistReducer, persistStore } from "redux-persist";
import { createStore } from "redux";
import * as authSlice from "./AuthStore/authSlice";
import * as itemSlice from "./ItemStore/itemSlice";
import storage from "redux-persist/lib/storage";

export const authReducer = persistReducer(
  { storage, key: "state-auth", blacklist: [] },
  authSlice.Slice.reducer
);
export const itemReducer = persistReducer(
  { storage, key: "state-item", blacklist: [] },
  itemSlice.Slice.reducer
);
const authStore = createStore(authReducer);
const itemStore = createStore(itemReducer);
persistStore(authStore);
persistStore(itemStore)