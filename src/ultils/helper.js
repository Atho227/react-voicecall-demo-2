export const doStartCall = (state) => {
    console.log('debug', state.callDirection);
    state.callStatus = 'ringing';
};


export const onReloaded = () => {
    const token = import.meta.env.VITE_SIGN_TOKEN
    const domain = import.meta.env.VITE_DOMAIN
    csInit(token, domain)
}