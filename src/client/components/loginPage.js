import { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class LoginPage extends PureComponent {
    render () {
        return (
            <div className="row justify-content-center">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header" data-background-color="purple">
                        <h4 className="title">Login</h4>
                        <p className="category">
                            Don't have an account? <Link to="/register">create new account</Link>
                        </p>
                    </div>
                    <div className="card-content">
                        <form>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Email</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group label-floating">
                                        <label className="control-label">Password</label>
                                        <input type="password" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary pull-right btn-block">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}