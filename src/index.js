import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import {BrowserRouter} from "react-router-dom";
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConf = {
  apiKey: "AIzaSyB4weXJ5vBVo0hex0Y1h2b-tncIF3OGU1g",
  authDomain: "internet-store-62659.firebaseapp.com",
  databaseURL: "https://internet-store-62659.firebaseio.com",
  projectId: "internet-store-62659",
  storageBucket: "internet-store-62659.appspot.com",
  messagingSenderId: "426370427599"
};

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

firebase.initializeApp(firebaseConf);
firebase.firestore();

const store = createStore(
  rootReducer,
  compose(
    composeWithDevTools(
      applyMiddleware(
        reduxThunk.withExtraArgument({
          getFirestore}
          ))),
    reduxFirestore(firebase),
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  createFirestoreInstance,
  dispatch: store.dispatch,
}

const AppStore = () => ( <Provider store={store}>
                           <ReactReduxFirebaseProvider {...rrfProps}>
                              <BrowserRouter>
                                <App/>
                              </BrowserRouter>
                            </ReactReduxFirebaseProvider>
                          </Provider>);

ReactDOM.render(
  <AppStore/>,
  document.getElementById('root')
);
