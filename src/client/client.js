import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from 'reducers/index';

import 'libs/jquery-3.2.1.min.exec';
import 'libs/bootstrap.min';
import 'libs/material.min.exec';
import 'libs/arrive.min.exec';
import 'libs/perfect-scrollbar.jquery.min.exec';
import 'libs/bootstrap-notify.exec';
import 'libs/material-dashboard.exec';

import Layout from 'components/layout';

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'components/routes';

const store = createStore(reducer, null, applyMiddleware(thunk));

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