import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from 'reducers/index';
import routes from 'components/routes';

import 'bootstrap';

import { Button } from 'reactstrap';

const store = createStore(reducer, null, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <div>
            <h1>Hola mundo!</h1>
            <Button>click me</Button>
        </div>
    </Provider>,
    document.getElementById('root')
);