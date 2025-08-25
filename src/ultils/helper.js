export const doStartCall = (state) => {
    console.log('debug', state.callDirection);
    state.callStatus = 'ringing';
};

export const onReloaded = () => {
    const token = import.meta.env.VITE_SIGN_TOKEN
    const domain = import.meta.env.VITE_DOMAIN
    csInit(token, domain)
}

export const serviceObjectFit = (obj) => {
    if (!obj) return null;

    return {
        id: obj.callout_id,
        descriptions: obj.descriptions,
        isCurrent: obj.is_default === 1
    };
};

const firstLoadPage = () => {
    const rawServices = window.csVoice.getCalloutServices(); // array
    const services = rawServices.map((item) => serviceObjectFit(item))
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

export function setCurrent(arr, id) {
    return arr.map(item => {
        if (item.id === id) {
            if (item.isCurrent === true) {
                return item;
            }
            return { ...item, isCurrent: true };
        }
        return { ...item, isCurrent: false };
    });
}