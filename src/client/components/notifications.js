import { PureComponent } from 'react';
import messages from 'messages';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closeNotification } from 'actions/notification-actions';

class Notifications extends PureComponent {

    constructor(props) {
        super(props);

        this.renderSingleNotification = this.renderSingleNotification.bind(this);
        this.mapType = this.mapType.bind(this);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    {this.props.notifications.map(this.renderSingleNotification)}
                </div>
            </div>
        );
    }

    renderSingleNotification({ type, message }, index) {
        return (
            <div className={"alert alert-" + this.mapType(type)} key={index}>
                <button {... this.getCloseButtonProps(index) }>×</button>
                <span>{messages[message]}</span>
            </div>
        );
    }

    mapType(type) {
        const map = {
            error: 'danger',
            info: 'info',
            success: 'success'
        };

        return map[type] || 'primary';
    }

    getCloseButtonProps(index) {
        return {
            type: 'button',
            'aria-hidden': 'true',
            className: 'close',
            onClick: () => this.props.closeNotification(index)
        };
    }
}

Notifications.propTypes = {
    notifications: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
    (state) => ({ notifications: state.notifications }),
    { closeNotification }
)(Notifications)