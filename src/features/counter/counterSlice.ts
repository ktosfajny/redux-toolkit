import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const INITIAL_STATE: CounterState = {
  value: 0,
} as CounterState;

export const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementAsync = (amount: number) => async (
  dispatch: Dispatch
) => {
  try {
    // some async liek fetching
    dispatch(incrementByAmount(amount));
  } catch (err) {}
};

export default counterSlice.reducer;
