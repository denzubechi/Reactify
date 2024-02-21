import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};



export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    register: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    googleSignIn: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { login, register, googleSignIn,setLoading, setError, logout } = authSlice.actions;

export default authSlice.reducer;

