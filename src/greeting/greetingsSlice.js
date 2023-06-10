import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  greeting: '',
  isLoading: true,
};

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  const response = await fetch('http://127.0.0.1:3000/api/random_greeting');
  const data = await response.json();
  return data;
});

const greetingsSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGreeting.fulfilled, (state, action) => {
      state.greeting = action.payload.greeting;
      state.isLoading = false;
    });
    builder.addCase(fetchGreeting.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default greetingsSlice.reducer;
