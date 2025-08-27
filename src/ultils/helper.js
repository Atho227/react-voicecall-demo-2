import { generateJWT } from "./mainUltils";

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
    const defaultServiceId = services.find(s => s.isCurrent).id;

    window.store.dispatch({ type: "call/setServiceList", payload: services })

    if (defaultServiceId) {
        window.store.dispatch({
            type: "call/currentServiceId",
            payload: defaultServiceId,
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

export function transformSVGtoJSX(svgString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, "image/svg+xml");
    const svg = doc.querySelector("svg");
    if (!svg) {
        console.log("Không tìm thấy <svg>");
        return;
    }
    svg.setAttribute("width", "{size}");
    svg.setAttribute("height", "{size}");
    let svgOpenTag = svg.outerHTML.match(/^<svg[^>]*>/)[0];
    svgOpenTag = svgOpenTag.replace(/>$/, " {...props}>");
    let inner = svg.innerHTML;
    inner = inner.replace(/fill="[^"]*"/g, 'fill={fill}');
    const result = svgOpenTag + inner + "</svg>";
    console.log(result);
}

export function generateToken(aggentId, secret) {
    return generateJWT(createPayload(aggentId), secret)
}

export function createPayload(id) {
    return { "ipphone": id };
}