export const doStartCall = (state) => {
    console.log('debug', state.callDirection);
    state.callStatus = 'ringing';
};

export const onReloaded = () => {
    const token = import.meta.env.VITE_SIGN_TOKEN
    const domain = import.meta.env.VITE_DOMAIN
    csInit(token, domain)
}

const firstLoadPage = () => {
    const services = window.csVoice.getCalloutServices(); // array
    const defaultService = services.find(s => s.is_default === 1);

    window.store.dispatch({ type: "call/setServiceList", payload: services })
    if (defaultService) {
        window.store.dispatch({
            type: "call/currentService",
            payload: defaultService,
        });
    }
}

window.firstLoadPage = firstLoadPage