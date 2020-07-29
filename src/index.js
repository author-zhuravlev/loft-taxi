import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import App from './containers/app/AppContainer';
import rootReducer from './core/reducers';
import * as serviceWorker from './serviceWorker';
import { rootSaga } from './core/saga';

import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(
    applyMiddleware(
        sagaMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
