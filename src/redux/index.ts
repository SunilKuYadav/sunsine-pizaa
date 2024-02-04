import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import { useAppDispatch, useAppSelector } from "./storeHooks";
import { menuReducer } from "./menuSlice";

const combinedRootReducer = combineReducers({
  menuReducer,
});

const store = configureStore({
  reducer: combinedRootReducer,
  middleware: (defaultMiddleware) =>
    // TODO: can't we provide midddleware = sagaMiddleware ?
    defaultMiddleware({
      serializableCheck: {
        // Ignore these action types | using it to avoid warning
        ignoredActions: [],
      },
    }),
});

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor, useAppDispatch, useAppSelector };
