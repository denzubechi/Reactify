import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth-slice';

// Create the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer, // Include your auth slice reducer here
    // Add other reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
