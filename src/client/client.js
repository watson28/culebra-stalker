import 'jquery';
import 'bootstrap';
import 'libs/vendors';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from 'libs/store';
import Layout from 'components/layout';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'components/routes';

render(
    <Provider store={store}>
        <Layout>
            <Router>
                <Routes />
            </Router>
        </Layout>
    </Provider>,
    document.getElementById('root')
);