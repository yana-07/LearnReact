//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter.js';
import authReducer from './auth.js';

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             ...state,
//             counter: state.counter + 1
//         };
//     }

//     if (action.type === 'increase') {
//         return {
//             ...state,
//             counter: state.counter + action.amount
//         };
//     }

//     if (action.type === 'decrement') {
//         return {
//             ...state,
//             counter: state.counter - 1
//         };
//     }

//     if (action.type === 'toggle') {
//         return {
//             ...state,
//             showCounter: !state.showCounter
//         };
//     }

//     return state;
// };

const store = configureStore({
    //reducer: { counter: counterSlice.reducer } -> possible in case we need to merge different reducers into one global reducer
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});

export default store;