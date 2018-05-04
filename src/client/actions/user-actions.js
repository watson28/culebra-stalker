import {
    FETCH_LOGIN,
    FETCH_LOGIN_SUCCESS,
    FETCH_LOGIN_FAIL,
    FETCH_SIGNUP,
    FETCH_SIGNUP_SUCCESS,
    FETCH_SIGNUP_FAIL,
    LOGOUT
} from 'reducers/user-reducer';
import { callService } from 'libs/service-caller';

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_LOGIN });

        const { result } = await loginService(email, password);
        if (result.code === 'OK') {
            dispatch({
                type: FETCH_LOGIN_SUCCESS,
                payload: { userInfo: result.data }
            });
        } else {
            dispatch({ type: FETCH_LOGIN_FAIL, payload: { error: result.code } })
        }
    }
};

export const signup = (name, email, password) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_SIGNUP });

        const { result } = await signupService(name, email, password);
        if (result.code === 'OK') {
            dispatch({
                type: FETCH_SIGNUP_SUCCESS,
                payload: { userInfo: result.data }
            });
        } else {
            dispatch({ type: FETCH_SIGNUP_FAIL, payload: { error: result.code } })
        }
    };
};

export const logout = () => {
    logoutService();
    return { type: LOGOUT };
};

const loginService = (email, password) => {
    const URL = 'api/users/login';
    const data = { email, password };
    const options = { method: 'POST' };

    return callService(URL, data, options);
};

const signupService = (name, email, password) => {
    const URL = 'api/users';
    const method = 'POST';
    const data = { name, email, password }

    return callService(URL, data, { method });
};

const logoutService = () => {
    const URL = 'api/me/token';
    const method = 'DELETE';

    return callService(URL, {}, { method });
};