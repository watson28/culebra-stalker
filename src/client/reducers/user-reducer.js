const INITIAL_STATE = {
    userInfo: null,
    loggingUser: false
};

export const FETCH_LOGIN = 'FETCH_LOGIN';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCESS';
export const FETCH_LOGIN_FAIL = 'FETCH_LOGIN_FAIL';
export const FETCH_LOGOUT = 'FETCH_LOGOUT';
export const FETCH_LOGOUT_SUCESS = 'FETCH_LOGOUT_SUCESS';
export const FETCH_LOGOUT_FAIL = 'FETCH_LOGOUT_SUCESS';
export const SIGN_UP = 'SIGN_UP';

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_LOGIN:
            return { ...state, loggingUser: true};
        case FETCH_LOGIN_SUCCESS:
            return {...state, userInfo: action.payload.userInfo, loggingUser: false};
        case FETCH_LOGIN_FAIL:
            return {...state, userInfo: null, loggingUser: false};
    }
    
    return state;
};