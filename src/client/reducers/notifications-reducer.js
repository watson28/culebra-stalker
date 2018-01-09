import _ from 'lodash'

const INITIAL_STATE = [];

export const ADD_NOTIFICATIONS = 'ADD_NOTIFICATIONS';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';
export const CLEAR_ALL_NOTIFICATIONS = 'CLEAR_ALL_NOTIFICATIONS';

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ADD_NOTIFICATIONS:
            return action.payload.notifications.concat(state);
        case CLEAR_NOTIFICATION:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case CLEAR_ALL_NOTIFICATIONS:
            return [];
    }

    return state;
};