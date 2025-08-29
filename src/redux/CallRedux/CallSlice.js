import { createSlice } from "@reduxjs/toolkit";
import { doStartCall } from "../../ultils/helper";

const initialState = {
    permission: false,
    online: false,
    isCall: true,
    isRinging: false,
    isCallOut: true,
    isAnswer: true,
    callInfo: {},
    serviceList: [],
    currentServiceId: null,
    currentDevice: 1,
    isMuting: false,
    isHolding: false,
};

const callSlice = createSlice({
    name: 'call',
    initialState,
    reducers: {
        permission: (state, action) => {
            state.permission = action.payload;
        },
        online: (state, action) => {
            state.online = action.payload;
        },
        isCall: (state, action) => {
            state.isCall = action.payload;
        },
        isRinging: (state, action) => {
            state.isRinging = action.payload;
        },
        isCallOut: (state, action) => {
            state.isCallOut = action.payload;
            state.isAnswer = false
        },
        isAnswer: (state, action) => {
            state.isAnswer = action.payload;
            state.isCallOut = false
        },
        callInfo: (state, action) => {
            state.callInfo = action.payload;
        },
        setServiceList: (state, action) => {
            state.serviceList = action.payload;
        },
        currentServiceId: (state, action) => {
            state.currentServiceId = action.payload;
        },
        currentDevice: (state, action) => {
            state.currentDevice = action.payload;
        },
        isMuting: (state, action) => {
            state.isMuting = action.payload;
        },
        isHolding: (state, action) => {
            state.isHolding = action.payload;
        },
        endCall: (state) => {
            state.isCall = false
            state.isRinging = false
            state.isCallOut = false
            state.isAnswer = false
            state.callInfo = {}
            state.isMuting = false
            state.isHolding = false
        },
    },
});

export const {
    permission,
    online,
    isCall,
    isRinging,
    isCallOut,
    isAnswer,
    callInfo,
    setServiceList,
    currentServiceId,
    currentDevice,
    isMuting,
    isHolding,
    endCall
} = callSlice.actions;

export default callSlice.reducer;
