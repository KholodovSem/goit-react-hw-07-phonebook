import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './contacts';
import { filterReducer } from './filterReducer';

const middleware = [...getDefaultMiddleware(), contactsApi.middleware];

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware,
});

setupListeners(store.dispatch);

