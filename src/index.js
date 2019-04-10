import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

const app = <Provider store={store}>
              <BrowserRouter>
                <App/>
              </BrowserRouter>
            </Provider>;

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
