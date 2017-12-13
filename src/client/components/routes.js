import { Route } from 'react-router-dom';
import { PureComponent } from 'react';
import LoginPage from 'components/loginPage';
import RegisterPage from 'components/registerPage';

export default class Routes extends PureComponent {
    render () {
        return (
            <div>
                <Route exact path="/" component={RegisterPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/>
            </div>
        );
    }
}