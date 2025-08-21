import { store } from '../redux/store';

export function dispatchCallAction(action, payload) {
    store.dispatch(action(payload));
}