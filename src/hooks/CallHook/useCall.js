import { useSelector, useDispatch } from "react-redux";
import {
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
} from "../../redux/CallRedux/CallSlice";

export const useCall = () => {
    const call = useSelector(state => state.call);
    const dispatch = useDispatch();

    return {
        ...call,

        // các action tương ứng
        setPermission: (val) => dispatch(permission(val)),
        setOnline: (val) => dispatch(online(val)),
        setIsCall: (val) => dispatch(isCall(val)),
        setIsRinging: (val) => dispatch(isRinging(val)),
        setIsCallOut: (val) => dispatch(isCallOut(val)),
        setIsAnswer: (val) => dispatch(isAnswer(val)),
        updateCallInfo: (info) => dispatch(callInfo(info)),
        setServiceList: (list) => dispatch(setServiceList(list)),
        setCurrentServiceId: (id) => dispatch(currentServiceId(id)),
        setCurrentDevice: (device) => dispatch(currentDevice(device)),
        toggleMute: (val) => dispatch(isMuting(val)),
        toggleHold: (val) => dispatch(isHolding(val)),

        // end call
        endCall: () => dispatch(endCall()),
    };
};
