import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';

export const logout: any = createAsyncThunk('logout', async () => {
  await auth().signOut();
});

type User = {
  email: string,
}

interface SignInState {
  user?: User | undefined,
  isSignedIn: boolean
}

const initialState: SignInState = {
  user: undefined,
  isSignedIn: true,
}

export const singInSlice = createSlice({
  name: 'SignIn',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isSignedIn = true
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(logout.fulfilled, state => {
      state.isSignedIn = false
      state.user = undefined;
    }),
    builder.addCase(logout.rejected, state => {
      console.error('Logout has failed')
    })
  },
})

export const { login } = singInSlice.actions;

export default singInSlice.reducer;