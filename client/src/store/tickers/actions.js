import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common';

const getTickers = createAsyncThunk(ActionType.GET_TICKERS, async (payload) => {
  return payload;
});

export { getTickers };
