import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormValidator from 'components/form-validation/form-validator';
import InputValidator from 'components/form-validation/input-validator';
import { connect } from 'react-redux';
import { login } from 'actions/user-actions';
import RedirectOnSessionChanges from 'components/redirect-on-session-changes';
import Card from 'components/presentation/card';

class LoginPage extends PureComponent {

    constructor(props) {
        super(props);

        this.onValidFormSubmit = this.onValidFormSubmit.bind(this);
        this.getButtonSubmitProps = this.getButtonSubmitProps.bind(this);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-offset-4 col-md-4">
                    <Card {...this.getCardProps()}>
                        <FormValidator onValidFormSubmit={this.onValidFormSubmit}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Email</label>
                                        <InputValidator type="email" name="email" className="form-control" validations={['required', 'email']} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Password</label>
                                        <InputValidator type="password" name="password" className="form-control" validations={['required']} />
                                    </div>
                                </div>
                            </div>
                            <button {... this.getButtonSubmitProps() } />
                        </FormValidator>
                    </Card>
                </div>
            </div>
        );
    }

    onValidFormSubmit(data) {
        this.props.login(data.email, data.password);
    }

    getCardProps() {
        return {
            title: 'Login',
            subContent: <span>Dont have an account? <Link to="/register">create new account</Link></span>
        };

    }

    getButtonSubmitProps() {
        return {
            type: 'submit',
            className: 'btn btn-primary btn-block',
            disabled: this.props.loggingUser,
            children: (!this.props.loggingUser) ? 'Login' : 'Working on it ...'
        };
    }
}

LoginPage.propTypes = {
    loggingUser: PropTypes.bool,
    login: PropTypes.func.isRequired
};

const ConnectedLoginPage = connect(
    (state) => ({ loggingUser: state.user.loggingUser }),
    { login }
)(LoginPage);

export default RedirectOnSessionChanges(ConnectedLoginPage, {redirectTo: '/dashboard', redirectOnLogin: true});


var a = [];