import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const RedirectOnLoggedIn = (PageComponent, {redirectTo, redirectOnLogin, redirectOnLogout}) => {
    return connect(
        state => ({ isLoggedIn: Boolean(state.user.userInfo) })
    )(props => {
        let result;

        if (redirectOnLogin && redirectOnLogout) {
            throw new Error('invalid props supplied');
        }

        if ((redirectOnLogin && props.isLoggedIn) || (redirectOnLogout && !props.isLoggedIn)) {
            result = <Redirect to={redirectTo} />;
        } else {
            result = <PageComponent {...props} />
        }
    
        return result;
    });

}

export default RedirectOnLoggedIn;