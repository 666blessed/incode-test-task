import { createReducer } from '@reduxjs/toolkit';
import { DataStatus } from '../../common/enums/enums';

import { getTickers } from './actions';

const initialState = {
  dataStatus: DataStatus.IDLE,
  tickers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getTickers.pending, (state) => {
    state.dataStatus = DataStatus.PENDING;
  });
  builder.addCase(getTickers.fulfilled, (state, { payload }) => {
    state.dataStatus = DataStatus.FULFILLED;
    state.tickers = payload;
  });
  builder.addCase(getTickers.rejected, (state) => {
    state.dataStatus = DataStatus.REJECTED;
  });
});

export { reducer };
