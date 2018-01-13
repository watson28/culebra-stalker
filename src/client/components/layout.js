import { PureComponent } from 'react';
import Notifications from 'components/notifications';

export default class Layout extends PureComponent {
    render() {
        return (
            <div className="wrapper">
                <div className="content">
                    <div className="container-fluid">
                        <Notifications />
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}