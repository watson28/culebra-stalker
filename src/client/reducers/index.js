import { combineReducers } from 'redux';
import user from './user-reducer';
import notifications from './notifications-reducer';

export default combineReducers({
    user,
    notifications
});