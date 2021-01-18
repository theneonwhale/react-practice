// import actionTypes from './counter-types';
import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');

// export const increment = value => ({
//   type: actionTypes.INCREMENT,
//   payload: value,
// });

// export const decrement = value => ({
//   type: actionTypes.DECREMENT,
//   payload: value,
// });
