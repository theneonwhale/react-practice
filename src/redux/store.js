// import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'woof',
  storage,
};

const counterPersistConfig = {
  key: 'counter',
  storage,
  // whiteList: ['counter/increment'],
};

const rootReducer = combineReducers({
  counter: persistReducer(counterPersistConfig, counterReducer),
});

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const initialState = {
//   counter: {
//     value: 0,
//     step: 45,
//   },
// };

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'counter/increment':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value + payload,
//         },
//       };
//     case 'counter/decrement':
//       return {
//         ...state,
//         counter: {
//           ...state.counter,
//           value: state.counter.value - payload,
//         },
//       };
//     default:
//       return state;
//   }
//   //   console.log('from reducer', action);
//   //   return state;
// };

// const counterInitialState = {
//   value: 0,
//   step: 45,
// };

// const valueReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case 'counter/increment':
//       return state + payload;

//     case 'counter/decrement':
//       return state - payload;

//     default:
//       return state;
//   }
// };

// const stepReducer = (state = 15, action) => state;

// const counterReducer = (state = counterInitialState, { type, payload }) => {
//   switch (type) {
//     case 'counter/increment':
//       return {
//         ...state,
//         value: state.counter.value + payload,
//       };

//     case 'counter/decrement':
//       return {
//         ...state,
//         value: state.counter.value - payload,
//       };

//     default:
//       return state;
//   }
// };

// const counterReducer = combineReducers({
//   value: valueReducer,
//   step: stepReducer,
// });

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
// console.log(process.env.NODE_ENV);
// console.log(getDefaultMiddleware());

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

const persistor = persistStore(store);

export default { store, persistor };
