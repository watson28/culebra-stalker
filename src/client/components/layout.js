import { PureComponent } from 'react';
import Notifications from 'components/notifications';
import Header from 'components/header';

export default class Layout extends PureComponent {
    render() {
        return (
            <div>
                <Header />
                <div className="fullpage wrapper">
                    <div className="content">
                        <div className="container">
                            <Notifications />
                            {this.props.children}
                        </div>
                    </div>
                    <div className="fullpage-background" style={{backgroundImage: "url(assets/images/background.jpeg"}}></div>
                </div>
            </div>
        );
    }
}