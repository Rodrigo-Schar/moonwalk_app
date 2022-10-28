import { signInReducer } from '@/features/Signin';
import { configureStore } from '@reduxjs/toolkit'
// ...

const store = configureStore({
  reducer: {
    signIn: signInReducer
  },
});

export default store

// Store
export type RootState = ReturnType<typeof store.getState>;
// Dispatch for Actions
export type AppDispatch = typeof store.dispatch;