import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import settingReducer from './setting/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import Reactotron from 'reactotron-react-native';

const settingConfig = {
  key: 'setting',
  storage: AsyncStorage,
  whitelist: ['topicsChoose'],
};
export const store = configureStore({
  reducer: {
    setting: persistReducer(settingConfig, settingReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  devTools: !!__DEV__,
  enhancers: __DEV__ && Reactotron.createEnhancer ? [Reactotron.createEnhancer()] : [],
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
