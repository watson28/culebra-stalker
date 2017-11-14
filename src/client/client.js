import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, browserHistory, match } from 'react-router';
import reducer from 'reducers/index';
import routes from 'components/routes';

const store = createStore(reducer, null, applyMiddleware(thunk));

console.log(match);

match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
    render(
        <Provider store={store}>
            <Router {...renderProps} />
        </Provider>,
        document.getElementById('root')
    );
})