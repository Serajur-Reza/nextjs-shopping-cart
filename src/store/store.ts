import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    rootedReducer: persistedReducer,
  },
  middleware: (getDefaultMiddlewares) => {
    return getDefaultMiddlewares({
      serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, REHYDRATE, PURGE, PAUSE, PERSIST],
      },
    });
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const persistedStore = persistStore(store);
