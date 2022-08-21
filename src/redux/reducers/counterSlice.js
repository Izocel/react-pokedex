import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload ? action.payload : 1;
    },
    decrement: (state, action) => {
      state.count -= action.payload ? action.payload : 1;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer