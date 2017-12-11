import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from 'reducers/index';
import routes from 'components/routes';

const store = createStore(reducer, null, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <h1>Hola mundo!</h1>
    </Provider>,
    document.getElementById('root')
);