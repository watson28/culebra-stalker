import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormValidator from 'components/form-validation/form-validator';
import InputValidator from 'components/form-validation/input-validator';

class LoginPage extends PureComponent {

    render() {
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
                            <FormValidator onValidFormSubmit={() => { alert("good!!") }}>
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
                                <button type="submit" className="btn btn-primary pull-right btn-block">
                                    Login
                                </button>
                            </FormValidator>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

LoginPage.PropTypes = {
    location: PropTypes.object.required
};

export default LoginPage;