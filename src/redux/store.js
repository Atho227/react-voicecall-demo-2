import { configureStore } from '@reduxjs/toolkit';
import callReducer from '../redux/CallRedux/CallSlice'
import authReducer from './slices/authSlice'
import voiceReducer from '../redux/slices/voiceCallSlice'
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        call: callReducer,
        voiceCall: voiceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

window.store = store;