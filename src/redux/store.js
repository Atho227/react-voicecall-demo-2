import { configureStore } from '@reduxjs/toolkit';
import callReducer from '../redux/CallRedux/CallSlice';
import voiceReducer from '../redux/slices/voiceCallSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        call: callReducer,
        voiceCall: voiceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

window.store = store;