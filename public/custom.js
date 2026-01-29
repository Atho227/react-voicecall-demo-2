// custom.js

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

    const isCallout = window.csVoice?.isCallout;
    if (isCallout) {
        console.warn("isCallout:", isCallout);
        window.store.dispatch({ type: "call/isCallOut", payload: true });
        const callInfo = window.csVoice?.callInfo;
        if (!callInfo || callInfo === undefined) {
            console.warn("callInfo chưa sẵn sàng:", callInfo);
            return;
        }
        console.log("callInfo sẵn sàng 1:", callInfo);
        console.log("callInfo sẵn sàng 2:", callInfo.callerName);
        const phoneInfo = {
            name: callInfo.callerName,
            phone: callInfo.caller,
        };
        window.store.dispatch({ type: "call/callInfo", payload: phoneInfo });
    } else {
        console.warn("isCallout:", isCallout);
        window.store.dispatch({ type: "call/isAnswer", payload: true });
        window.store.dispatch({
            type: "call/callInfo", payload: {
                name: phone,
                phone: phone,
            }
        });
    }
    window.store.dispatch({ type: "call/isCall", payload: true });
    window.store.dispatch({ type: "call/isRinging", payload: true });
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
    window.store.dispatch({ type: "call/isMuting", payload: true })
}

function csUnMuteCall() {
    console.log('csUnMuteCall');
    window.store.dispatch({ type: "call/isMuting", payload: false })
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
    if (errorCode) {
        window.setLoggedStatus(false)
    }
}

function csInitComplete() {
    console.log('Kết nối thành công');
    window.setLoggedStatus(true)
    window.firstLoadPage()
}
function csListTransferAgent(listTransferAgent) {
    console.log(`csListTransferAgent : ${JSON.stringify(listTransferAgent)}`);
    window.updateOnlineAgentList(listTransferAgent)
}
function csTransferCallError(error, tranferedAgentInfo) {
    console.log(`csTransferCallError : ${error} and ${tranferedAgentInfo}`);
}
function csTransferCallSuccess(tranferedAgentInfo) {
    console.log(`tranferedAgentInfo : ${tranferedAgentInfo}`);
    window.store.dispatch({ type: "call/transferOk", payload: true })
}

function csNewCallTransferRequest(transferCall) {
    console.log(`csNewCallTransferRequest debug: ${transferCall}`);
    window.store.dispatch({ type: "call/isReciveTransfer", payload: true })
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

