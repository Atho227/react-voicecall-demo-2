import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    permission: false,
    online: false,
    service: 'id',
    callInfo: {},
    callStatus: 'initial',   // hide | initial | ringing | calling | busy
    callDirection: 'out',    // out | in
    mute: false,
    hold: false,
};

const callSlice = createSlice({
    name: 'call',
    initialState,
    reducers: {
        startCall: (state, action) => {
            state.callStatus = 'ringing';
            state.callDirection = 'out';
            state.callInfo = action.payload || {};
        },
        receiveCall: (state, action) => {
            state.callStatus = 'ringing';
            state.callDirection = 'in';
            state.callInfo = action.payload || {};
        },
        acceptCall: (state) => {
            state.callStatus = 'calling';
        },
        endCall: (state) => {
            state.callStatus = 'initial';
            state.callInfo = {};
        },
        setBusy: (state) => {
            state.callStatus = 'busy';
        },
        toggleMute: (state) => {
            state.mute = !state.mute;
        },
        toggleHold: (state) => {
            state.hold = !state.hold;
        },
        setPermission: (state, action) => {
            state.permission = action.payload;
        },
        setOnline: (state, action) => {
            state.online = action.payload;
        },
        setService: (state, action) => {
            state.service = action.payload; // ví dụ: 'id', 'skype', 'zoom'
        },
    },
});

export const {
    startCall,
    receiveCall,
    acceptCall,
    endCall,
    setBusy,
    toggleMute,
    toggleHold,
    setPermission,
    setOnline,
    setService
} = callSlice.actions;

export default callSlice.reducer;
