// third-party
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

// project imports
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
const { dispatch } = store;

export { dispatch, store };
export default store;
