import { FETCH_LOGIN, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAIL } from 'reducers/user-reducer';

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_LOGIN });

        try {
            const { result } = await loginService(email, password);
            if (result.code === 'OK') {
                dispatch({
                    type: FETCH_LOGIN_SUCCESS,
                    payload: { userInfo: result.data }
                });
            } else {
                dispatch({ type: FETCH_LOGIN_FAIL, payload: { error: result.code } })
            }
        } catch (e) {
            dispatch({ type: FETCH_LOGIN_FAIL, payload: { error: e } })
        }
    }
};

const loginService = (email, password) => {
    const LOGIN_URL = 'api/users/login';

    return callAPIService(LOGIN_URL, { email, password }, {method: 'POST'});
};

import store from 'store';
import { ADD_NOTIFICATIONS } from 'reducers/notifications-reducer';
const defaultOptions = {
    method: 'GET',
    headers: {}
};

const callAPIService = async (url, data, options = {}) => {
    const finalOptions = {...defaultOptions, ...options};
    const body = JSON.stringify(data);
    const defaultHeaders = { 'Content-Type': 'application/json' };
    const headers = { ...defaultHeaders, ...finalOptions.headers };

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