import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store/store"


export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
} as CounterState

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, {payload}: PayloadAction<number>) => {
      state.value += payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer