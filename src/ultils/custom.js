// src/ultils/custom.js

window.unload = function () {
    csUnregister();
    if (csVoice.enableVoice) {
        reConfigDeviceType();
    }
    return "1";
}

// custom.js - Implement các hàm callback từ tài liệu
function csCallRinging(phone) {
    console.log(`csCallRinging: ${phone}`);
    const callInfo = JSON.stringify(window.csVoice?.callInfo);

    if (!callInfo) {
        console.warn("callInfo chưa sẵn sàng:", callInfo);
        return;
    }
    const phoneInfo = {
        name: callInfo.callerName || phone,
        phone: callInfo.caller || phone,
    };

    const isCallout = window.csVoice?.isCallout;
    if (isCallout) {
        console.warn("isCallout:", isCallout);
        window.store.dispatch({ type: "call/isCallOut", payload: true });
    } else {
        console.warn("isCallout:", isCallout);
        window.store.dispatch({ type: "call/isAnswer", payload: true });
    }
    window.store.dispatch({ type: "call/isCall", payload: true });
    window.store.dispatch({ type: "call/isRinging", payload: true });
    window.store.dispatch({ type: "call/callInfo", payload: phoneInfo });
}


function csAcceptCall() {
    console.log('Cuộc gọi được chấp nhận');
    if (!window.csVoice.isCallout) {
        window.store.dispatch({ type: "call/isRinging", payload: false })
    }
}

function csEndCall() {
    console.log('Cuộc gọi kết thúc');
    window.store.dispatch({ type: "call/endCall" })
}

function csMuteCall() {
    console.log('csMuteCall');
    // window.toggleMute(true)
}

function csUnMuteCall() {
    console.log('csUnMuteCall');
}
function csHoldCall() {
    console.log('gọi được hold');
    window.store.dispatch({ type: "call/isHolding", payload: true })
}

function csUnHoldCall() {
    console.log('gọi bị unhold');
    window.store.dispatch({ type: "call/isHolding", payload: false })
}

function showCalloutInfo(number) {
    console.log(`showCalloutInfo : ${number}`);
    // Đóng popup hoặc reset UI
}

function showCalloutError(errorCode, sipCode) {
    console.log('showCalloutError:', errorCode, sipCode);
    // Đóng popup hoặc reset UI
}

function csShowEnableVoice(isEnable) {
    console.log(`csShowEnableVoice : ${isEnable}`);
    window.store.dispatch({ type: "call/permission", payload: isEnable })
}

function csShowCallStatus(status) {
    console.log(`csShowCallStatus : ${status}`);
    window.store.dispatch({ type: "call/online", payload: status === 'Online' })
}
function csCustomerAccept() {
    console.log('csCustomerAccept');
    window.store.dispatch({ type: "call/isRinging", payload: false })
}
function csShowDeviceType(type) {
    console.log(`csShowDeviceType : ${type}`);
    window.store.dispatch({ type: "call/currentDevice", payload: type })
}
function csCurrentCallId(callId) {
    console.log(`csCurrentCallId : ${callId}`);
    // Đóng popup hoặc reset UI
}

function csInitError(errorCode) {
    console.error(`Lỗi kết nối: ${errorCode}`);
}

function csInitComplete() {
    console.log('Kết nối thành công');
    // console.log('csVoice ban đầu:', JSON.stringify(window.csVoice.callInfo))
    window.firstLoadPage()
}
function csListTransferAgent(listTransferAgent) {
    console.log(`csListTransferAgent : ${JSON.stringify(listTransferAgent)}`);
}
function csTransferCallError(error, tranferedAgentInfo) {
    console.log('csTransferCallError');
}
function csTransferCallSuccess(tranferedAgentInfo) {
    console.log('csTransferCallSuccess');
}
function csNewCallTransferRequest(transferCall) {
    console.log('csNewCallTransferRequest');
}
function csTransferCallResponse(status) {
    console.log('csTransferCallResponse');
}

function csTransferSurveyResponse(status) {
    console.log('csTransferSurveyResponse');
}
function csNotifyReconnecting(retry, maxRetry) {
    console.log('csNotifyReconnecting');
}
function csOndisconnected() {
    console.log('csOndisconnected');
}

