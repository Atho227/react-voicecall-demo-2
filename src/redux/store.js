import { configureStore } from '@reduxjs/toolkit';
import callReducer from '../redux/CallRedux/CallSlice'
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        call: callReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
