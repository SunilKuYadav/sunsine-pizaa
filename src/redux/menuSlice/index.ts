import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import DATA from "./data.json";

const initialState = {
  menu: DATA.menuItem,
};
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
});

const persistConfig = {
  key: "menu",
  storage: storage,
  whitelist: [
    // "popularCities",
    // "fabContactNo",
    // "homeData",
    // "searchPopularCities",
    // "searchAllCities",
    // "fabQuoteMsg",
  ],
};

const persistedMenuReducer = persistReducer(persistConfig, menuSlice.reducer);

export const {} = menuSlice.actions;

export { persistedMenuReducer as menuReducer };
