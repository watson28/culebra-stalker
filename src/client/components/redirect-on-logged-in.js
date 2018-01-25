import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const RedirectOnLoggedIn = (PageComponent, redirectTo) => {
    return connect(
        state => ({ isLoggedIn: Boolean(state.user.userInfo) })
    )(props => {
        let result;
        if (props.isLoggedIn) {
            result = <Redirect to={redirectTo} />;
        } else {
            result = <PageComponent {...props} />
        }
    
        return result;
    });

}

export default RedirectOnLoggedIn;