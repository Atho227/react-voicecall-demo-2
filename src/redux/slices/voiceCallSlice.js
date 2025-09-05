import { createSlice } from "@reduxjs/toolkit";
import { isMuting } from "../CallRedux/CallSlice";

const initialState = {
    hasPermission: false,
    isOnline: false,
    hasCall: false,
    callInfo: {},
    isRinging: false,
    isCallOut: false,
    isAnswer: false,
    isCalling: false,
    isMuting: false,
    isHolding: false,
    currentServiceId: null,
    serviceList: [],
    currentDevice: 1,
    onlineAgentList: [],
    isReciveTransfer: false,
    transferOk: false,
};

const voiceCallSlice = createSlice({
    name: 'voiceCall',
    initialState,
    reducers: {
        setPermission: (state, action) => {
            state.hasPermission = action.payload
        },
        setOnlineStatus: (state, action) => {
            state.isOnline = action.payload
        },
        onStartCall: (state) => {
            state.hasCall = true;
            state.isCallOut = true;
            state.isRinging = true;
        },
        onReciveCall: (state) => {
            state.hasCall = true;
            state.isAnswer = true;
            state.isRinging = true;
        },
        updateCallInfo: (state, action) => {
            state.callInfo = action.payload
        },
        toggleMute: (state) => {
            state.isMuting = !state.isMuting
        },
        toggleHold: (state) => {
            state.isHolding = !state.isHolding
        },
        onReciveTransfer: (state) => {
            state.isReciveTransfer = true
        },
        onDoneTransfer: (state) => {
            state.transferOk = true
        },
        updateServiceList: (state, action) => {
            state.serviceList = action.payload
        },
        updateCurrentService: (state, action) => {
            state.currentServiceId = action.payload
        },
        updateOnlineAgentList: (state, action) => {
            state.onlineAgentList = action.payload
        },
        updateCurrentDevice: (state, action) => {
            state.currentDevice = action.payload
        },
        endCall: (state, action) => {
            state.callInfo = action.payload
        },
    }
})

export const {
    setPermission,
    setOnlineStatus,
    onStartCall,
    onReciveCall,
    updateCallInfo,
    toggleMute,
    toggleHold,
    onReciveTransfer,
    onDoneTransfer,
    updateServiceList,
    updateCurrentService,
    updateOnlineAgentList,
    updateCurrentDevice,
    endCall,
} = voiceCallSlice.actions;

export default voiceCallSlice.reducer;