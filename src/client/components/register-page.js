import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import FormValidator from 'components/form-validation/form-validator';
import InputValidator from 'components/form-validation/input-validator';

export default class registerPage extends PureComponent {
    render() {
        return (
            <div className="row">
                <div className="col-md-offset-4 col-md-4">
                    <div className="card">
                        <div className="card-header" data-background-color="purple">
                            <h4 className="title">Register</h4>
                            <p className="category">
                                Already have an account? <Link to="/login">login with existing account</Link>
                            </p>
                        </div>
                        <div className="card-content">
                            <FormValidator onValidFormSubmit={() => { alert("good!!") }}>
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
                                            <InputValidator type="email" name="password" className="form-control" validations={['required']} />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    Create Account
                                </button>
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}