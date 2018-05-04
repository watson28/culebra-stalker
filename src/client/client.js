import 'jquery';
import 'bootstrap';
import 'libs/vendors';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'libs/store';
import Layout from 'components/layout';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'components/routes';
import { PersistGate } from 'redux-persist/lib/integration/react'

const StateLoaderIndicator = () => <div>Loading state from local storage</div>;

render(
    <Provider store={store}>
        <PersistGate loading={<StateLoaderIndicator />} persistor={persistor}>
            <Layout>
                <Router>
                    <Routes />
                </Router>
            </Layout>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);