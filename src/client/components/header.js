import { connect } from 'react-redux';
import { logout } from 'actions/user-actions';

const Header = (props) => {
    let logoutItem = null;

    if (props.loggedIn) {
        logoutItem = (
            <li className="">
                <a href="#" onClick={props.logout}><i className="material-icons">lock_open</i>logout</a>
            </li>
        );
    }

    return (
        <nav className="navbar navbar-primary navbar-transparent navbar-absolute">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href=" ../dashboard.html ">Culebra Stalker<div className="ripple-container"></div></a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        {logoutItem}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default connect(
    (state) => ({ loggedIn: Boolean(state.user.userInfo) }),
    { logout }
)(Header);