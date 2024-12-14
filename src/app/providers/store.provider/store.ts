import { combineReducers, configureStore } from "@reduxjs/toolkit";

const combinedReducer = combineReducers({
  todos: todoSlice.reducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: combinedReducer,
    devTools: __IS_DEV__ ?? false,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = ReturnType<typeof setupStore>["dispatch"];
