import { useSelector, useDispatch } from "react-redux";
import { acceptCall, endCall, receiveCall, setBusy, setOnline, setPermission, setService, startCall, toggleHold, toggleMute, updateCallInfo } from "../../redux/CallRedux/CallSlice";

export const useCall = () => {
    const call = useSelector(state => state.call);
    const dispatch = useDispatch();

    return {
        ...call,
        startCall: () => dispatch(startCall()),
        receiveCall: () => dispatch(receiveCall()),   // info: {callerId...}
        acceptCall: () => dispatch(acceptCall()),
        endCall: () => dispatch(endCall()),
        setBusy: () => dispatch(setBusy()),
        toggleMute: () => dispatch(toggleMute()),
        toggleHold: () => dispatch(toggleHold()),
        setPermission: (val) => dispatch(setPermission(val)), // val: true/false
        setOnline: (val) => dispatch(setOnline(val)),         // val: true/false
        setService: (id) => dispatch(setService(id)),         // ví dụ: 'zoom'
        updateCallInfo: (info) => dispatch(updateCallInfo(info)), // info: {key: value}
    };
};
