import { testCallInfo } from "../assets/object/data";
import { conditions, payload } from "../assets/object/object";
import { apiCallHistory, formatRelativeTime, generateJWT, getLocalstorage } from "./mainUltils";

export const doStartCall = (state) => {
    console.log('debug', state.callDirection);
    state.callStatus = 'ringing';
};

export const onReloaded = () => {
    const csInitInfo = getLocalstorage('csInitInfo', '')
    const token = csInitInfo.token
    const domain = csInitInfo.domain
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
    const rawServices = window.csVoice.getCalloutServices();
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

export function setLoggedStatus(isLoggedIn) {
    window.store.dispatch({ type: "auth/setLoginStatus", payload: isLoggedIn })
}

export function getServiceInfoById(serviceId) {
    const serviceList = window.store.getState().call.serviceList
    return serviceList.find(item => item.id === serviceId)
}

export function updateOnlineAgentList(list) {
    if (!Array.isArray(list)) return [];
    const mappedList = list.map(agent => mapAgentObj(agent));
    window.store.dispatch({ type: "call/onlineAgentList", payload: mappedList })
}

export function mapAgentObj(agent) {
    return {
        id: agent.ipPhone || null,
        username: agent.userName || null,
        email: agent.userName || null,
        avatarUrl: null
    };
}

export function mapCallObj(call) {
    if (!call.id) {
        console.log("Missing call_id in call object:", call);
        return null;
    }
    const time = formatRelativeTime(call.end_time)
    return {
        id: call.id,
        end_time: time,
        call_id: call.call_id,
        type: call.call_type,
        service: call.called || null,
        customer: call.caller || null,
    };
}

export async function getCallsArr() {
    try {
        const data = await apiCallHistory(conditions, payload);
        const calls = data.calls;
        if (!Array.isArray(calls)) return [];
        const mappedCalls = calls.map(agent => mapCallObj(agent));
        const callMap = new Map();
        for (const call of mappedCalls) {
            const existing = callMap.get(call.call_id);
            if (!existing || call.id > existing.id) {
                callMap.set(call.call_id, call);
            }
        }
        return Array.from(callMap.values());
    } catch (err) {
        console.error("Error in getCallsArr:", err);
        return [];
    }
}

export async function getSigleCall(call_id) {
    const siglePayload = { call_id: call_id }
    try {
        const data = await apiCallHistory(conditions, siglePayload);
        const calls = data.calls;
        return calls;
    } catch (err) {
        console.error("Error in getCallsArr:", err);
        return [];
    }
}


window.firstLoadPage = firstLoadPage
window.setLoggedStatus = setLoggedStatus
window.updateOnlineAgentList = updateOnlineAgentList