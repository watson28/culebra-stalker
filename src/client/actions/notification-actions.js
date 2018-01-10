import { CLEAR_NOTIFICATION } from 'reducers/notifications-reducer';

export const closeNotification = (index) => {
    return {
        type: CLEAR_NOTIFICATION,
        payload: { index }
    };
};