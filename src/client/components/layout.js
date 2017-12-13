import { PureComponent } from 'react';

export default class Layout extends PureComponent {
    render() {
        return (
            <div className="wrapper">
                <div className="main-panel">
                    <div className="content">
                        <div className="container-fluid">
                         {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}