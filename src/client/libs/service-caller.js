import store from 'libs/store';
import { ADD_NOTIFICATIONS } from 'reducers/notifications-reducer';
const defaultOptions = {
    method: 'GET',
    headers: {}
};

const getHeaders = customHeaders => {
    const defaultHeaders = { 'Content-Type': 'application/json' };
    const userInfo = store.getState().user.userInfo;
    
    if (userInfo) {
        defaultHeaders['Authorization'] = `Bearer ${userInfo.authToken}`;
    }

    return {...defaultHeaders, ...customHeaders};
};

export const callService = async (url, data, options = {}) => {
    const finalOptions = {...defaultOptions, ...options};
    const body = JSON.stringify(data);
    
    const headers = getHeaders(finalOptions.headers);

    const response = await fetch(url, { method: finalOptions.method, headers, body });
    const responseData = await response.json();

    if (responseData.notifications.length > 0) {
        store.dispatch({
            type: ADD_NOTIFICATIONS,
            payload: { notifications: responseData.notifications }
        });
    }

    if (response.ok) {
        return responseData;
    } else {
        throw responseData;
    }
};