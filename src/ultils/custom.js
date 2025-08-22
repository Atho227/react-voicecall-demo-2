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
    console.log(`Cuộc gọi đến từ: ${phone}`);
    // Hiển thị popup hoặc UI thông báo cuộc gọi đến
}

function csAcceptCall() {
    console.log('Cuộc gọi đ ược chấp nhận');
    window.startCall()
}

function csEndCall() {
    console.log('Cuộc gọi kết thúc');
    window.CallEnded()
}

function csUnMuteCall() {
    console.log('gọi bị unMute');
    // Đóng popup hoặc reset UI
}
function csHoldCall() {
    console.log('gọi được hold');
    // Đóng popup hoặc reset UI
}
function csUnHoldCall() {
    console.log('gọi bị unhold');
    // Đóng popup hoặc reset UI
}

function showCalloutInfo(number) {
    console.log(`showCalloutInfo : ${number}`);
    // Đóng popup hoặc reset UI
}

function showCalloutError(errorCode, sipCode) {
    console.log('showCalloutError');
    // Đóng popup hoặc reset UI
}

function csShowEnableVoice(isEnable) {
    console.log(`csShowEnableVoice : ${isEnable}`);
    window.setPermission(isEnable)
}

function csShowCallStatus(status) {
    console.log(`csShowCallStatus : ${status}`);
    window.setOnline(status === 'Online')
}
function csCustomerAccept() {
    console.log('csCustomerAccept');
    window.acceptCall()
}
function csShowDeviceType(type) {
    console.log(`csShowDeviceType : ${type}`);
    // Đóng popup hoặc reset UI
}
function csCurrentCallId(callId) {
    console.log('csCurrentCallId');
    // Đóng popup hoặc reset UI
}

function csInitError(errorCode) {
    console.error(`Lỗi kết nối: ${errorCode}`);
}

function csInitComplete() {
    console.log('Kết nối thành công');
}
function csListTransferAgent(listTransferAgent) {
    console.log('csListTransferAgent');
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

