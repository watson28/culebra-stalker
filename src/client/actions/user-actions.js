import { FETCH_LOGIN, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAIL } from 'reducers/user-reducer';
import { callService } from 'libs/service-caller';

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

    return callService(LOGIN_URL, { email, password }, { method: 'POST' });
};