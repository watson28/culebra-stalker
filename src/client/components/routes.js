import React from 'react';
import {Route, IndexRoute} from 'react-router';
import IndexPage from 'components/index.js';

export default (
    <Route path="/">
        <IndexRoute component={IndexPage} />
    </Route>
);