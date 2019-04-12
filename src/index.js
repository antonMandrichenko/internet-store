import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import {BrowserRouter} from "react-router-dom";
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from './config/firebaseConfig'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer,
  compose(
    composeWithDevTools(applyMiddleware(reduxThunk.withExtraArgument({ getFirebase, getFirestore }))),
    reduxFirestore(firebase),
    reactReduxFirebase(firebase)
  )

);

const app = <Provider store={store}>
              <BrowserRouter>
                <App/>
              </BrowserRouter>
            </Provider>;

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
