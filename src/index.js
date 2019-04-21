import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import {BrowserRouter} from "react-router-dom";
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import App from './Components/App';
import { firebaseConf, rrfConfig } from "./configFB";

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
    reduxFirestore(firebase)
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  createFirestoreInstance,
  dispatch: store.dispatch,
};

const AppStore = () => ( <Provider store={store}>
                           <ReactReduxFirebaseProvider {...rrfProps}>
                              <BrowserRouter basename={'/internet-store'}>
                                <App/>
                              </BrowserRouter>
                            </ReactReduxFirebaseProvider>
                          </Provider>);

ReactDOM.render(
  <AppStore/>,
  document.getElementById('root')
);
