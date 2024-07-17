import { configureStore } from "@reduxjs/toolkit";
import autoMergeLevel1 from "redux-persist/es/stateReconciler/autoMergeLevel1";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import rootReducer from "./rootReducer";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel1,
  whitelist: ["auth", "user"],
  blacklist: [],
  debug: true,
};

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }).concat(thunk);

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer()),
  middleware,
  devTools: true,
});

export const persistor = persistStore(store);
export default store;
