import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import actionTypes from './counter-types';
// import * as actions from './counter-actions';
import { increment, decrement } from './counter-actions';

const valueReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

// const valueReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case actionTypes.INCREMENT:
//       return state + payload;

//     case actionTypes.DECREMENT:
//       return state - payload;

//     default:
//       return state;
//   }
// };

const stepReducer = createReducer(10, {});

// const stepReducer = (state = 15, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
