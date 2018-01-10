import { Route, withRouter } from 'react-router-dom';
import { PureComponent } from 'react';
import LoginPage from 'components/login-page';
import RegisterPage from 'components/register-page';
import DashboardPage from 'components/dashboard-page';

class Routes extends PureComponent {
    render () {
        return (
            <div>
                <Route exact path="/" component={RegisterPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/dashboard" component={DashboardPage}/>
            </div>
        );
    }
}

export default withRouter(Routes);