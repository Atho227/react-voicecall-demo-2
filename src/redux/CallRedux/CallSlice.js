import { createSlice } from "@reduxjs/toolkit";
import { doStartCall } from "../../ultils/helper";

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
        startCall: (state) => {
            if (state.callDirection === 'out') {
                doStartCall(state)
            } else {
                state.callStatus = 'calling';
            }
        },
        receiveCall: (state) => {
            if (Object.keys(state.callInfo).length === 0) {
                state.callStatus = 'ringing';
                state.callDirection = 'in';
            } else { doStartCall(state) }
        },
        updateCallInfo: (state, action) => {
            if (Object.keys(state.callInfo).length === 0) {
                state.callInfo = {
                    ...state.callInfo,
                    ...action.payload
                };
            }
        },
        acceptCall: (state) => {
            state.callStatus = 'calling';
        },
        CallEnded: (state) => {
            state.callStatus = 'initial';
            state.callDirection = 'out';
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
    CallEnded,
    setBusy,
    toggleMute,
    toggleHold,
    setPermission,
    setOnline,
    setService, updateCallInfo,
} = callSlice.actions;

export default callSlice.reducer;
