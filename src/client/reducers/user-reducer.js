const INITIAL_STATE = {
    userInfo: null,
    loggingUser: false,
    signingUp: false
};

export const FETCH_LOGIN = 'FETCH_LOGIN';
export const FETCH_LOGIN_SUCCESS = 'FETCH_LOGIN_SUCESS';
export const FETCH_LOGIN_FAIL = 'FETCH_LOGIN_FAIL';

export const LOGOUT = 'LOGOUT';

export const FETCH_SIGNUP = 'SIGNUP';
export const FETCH_SIGNUP_SUCCESS = 'FETCH_SIGNUP_SUCCESS';
export const FETCH_SIGNUP_FAIL = 'FETCH_SIGNUP_FAIL';

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_LOGIN:
            return { ...state, loggingUser: true};
        case FETCH_LOGIN_SUCCESS:
            return {...state, userInfo: action.payload.userInfo, loggingUser: false};
        case FETCH_LOGIN_FAIL:
            return {...state, userInfo: null, loggingUser: false};

        case FETCH_SIGNUP:
            return {...state, signingUp: true};
        case FETCH_SIGNUP_SUCCESS:
            return {...state, userInfo: action.payload.userInfo, signingUp: false};
        case FETCH_SIGNUP_FAIL:
            return {...state, userInfo: null, signingUp: false};

        case LOGOUT:
            return {...state, userInfo: null};        
    }
    
    return state;
};