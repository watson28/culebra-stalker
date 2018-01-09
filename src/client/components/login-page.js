import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormValidator from 'components/form-validation/form-validator';
import InputValidator from 'components/form-validation/input-validator';
import { connect } from 'react-redux';
import { login } from 'actions/user-actions';
import { Redirect } from 'react-router';

class LoginPage extends PureComponent {

    constructor(props) {
        super(props);

        this.onValidFormSubmit = this.onValidFormSubmit.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
        this.renderDefault = this.renderDefault.bind(this);
    }

    render() {
        return (this.props.isLoggedIn) ? this.renderRedirect() : this.renderDefault();
    }

    renderRedirect() {
        return <Redirect to="/dashboard" />
    }

    renderDefault() {
        return (
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header" data-background-color="purple">
                            <h4 className="title">Login</h4>
                            <p className="category">
                                Dont have an account? <Link to="/register">create new account</Link>
                            </p>
                        </div>
                        <div className="card-content">
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
                                <button {... this.getButtonSubmitProps()} />
                            </FormValidator>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onValidFormSubmit(data) {
        this.props.login(data.email, data.password);
    }

    getButtonSubmitProps() {
        return {
            type: 'submit',
            className: 'btn btn-primary btn-block',
            disabled: this.props.logginUser,
            children: (!this.props.logginUser) ? 'Login' : 'Working on it ...'
        };
    }
}

LoginPage.propTypes = {
    location: PropTypes.object.required,
    logginUser: PropTypes.bool,
    isLoggedIn: PropTypes.bool,
    login: PropTypes.func.isRequired
};

export default connect(
    (state) => ({ logginUser: state.user.logginUser, isLoggedIn: state.user.userInfo }),
    { login }
)(LoginPage)