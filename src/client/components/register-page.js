import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import FormValidator from 'components/form-validation/form-validator';
import InputValidator from 'components/form-validation/input-validator';
import { connect } from 'react-redux';
import { signup } from 'actions/user-actions';
import RedirectOnLoggedIn from 'components/redirect-on-logged-in';
import Card from 'components/presentation/card';

class SignUpPage extends PureComponent {

    constructor(props) {
        super(props);

        this.getButtonSubmitProps = this.getButtonSubmitProps.bind(this);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-offset-4 col-md-4">
                    <Card {...this.getCardProps()}>
                        <FormValidator onValidFormSubmit={({ name, email, password }) => this.props.signup(name, email, password)}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Name</label>
                                        <InputValidator type="text" name="name" className="form-control" validations={['required']} />
                                    </div>
                                </div>
                            </div>
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
                            <button {...this.getButtonSubmitProps() }></button>
                            <hr />
                            <button className="btn btn-social btn-fill btn-google btn-block">
                                <i className="fa fa-google-square"></i> Signup with Google+
                                    <div className="ripple-container"></div>
                            </button>
                            <button className="btn btn-social btn-fill btn-facebook btn-block">
                                <i className="fa fa-facebook-square"></i> Signup with Facebook
                                    <div className="ripple-container"></div>
                            </button>
                            <div className="clearfix"></div>
                        </FormValidator>
                    </Card>
                </div>
            </div>
        );
    }

    getCardProps() {
        return {
            title: 'Register',
            subContent: <span>Already have an account? <Link to="/login">login with existing account</Link></span>
        };
    }

    getButtonSubmitProps() {
        return {
            type: 'submit',
            className: 'btn btn-primary btn-block',
            disabled: this.props.signingUp,
            children: (!this.props.signingUp) ? 'Create Account' : 'Working on it ...'
        };
    }
}

const ConnectedSignUpPage = connect(state => ({ signingUp: state.user.signingUp }), { signup })(SignUpPage);

export default RedirectOnLoggedIn(ConnectedSignUpPage, '/dashboard');