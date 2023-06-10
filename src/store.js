import { configureStore } from '@reduxjs/toolkit';
import greetingsSlice from 'greeting/greetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsSlice,
  },
});

export default store;
