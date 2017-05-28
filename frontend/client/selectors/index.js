import {createSelector} from 'reselect';

export const reading = (state) => state.readings.number;
export const data = (state) => state.api.data;
export const listening = (state) => state.readings.listening;

export const maximumReading = createSelector([data], (d) =>
  d.slice(0,10).map(item => item.number).reduce((a, b) => Math.max(a, b), 0)
);

export const minimumReading = createSelector([data], (d) =>
  d.slice(0,10).map(item => item.number).reduce((a, b) => Math.min(a, b), 10)
);
