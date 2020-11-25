import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux'; //to allow access to state from anywhere and not just root
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const store=createStore(reducers,compose(applyMiddleware(thunk)));

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('root')
);