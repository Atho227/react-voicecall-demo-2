export const doStartCall = (state) => {
    console.log('debug', state.callDirection);
    state.callStatus = 'ringing';
};
