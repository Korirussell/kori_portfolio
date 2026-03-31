import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import tabReducer from "./tabSlice";
import systemReducer from "./systemSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const tabPersistConfig = {
  key: "tab",
  storage,
  whitelist: ["currentZIndex"],
};

const systemPersistConfig = {
  key: "system",
  storage,
  whitelist: ["theme"],
};

const rootReducer = combineReducers({
  tab: persistReducer(tabPersistConfig, tabReducer),
  system: persistReducer(systemPersistConfig, systemReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
export default store;
