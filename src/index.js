import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import {legacy_createStore as createStore,combineReducers, compose, applyMiddleware} from "redux"
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import burgerbuildeReducer from './store/reducers/burgerbuilder';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  buildReducer:burgerbuildeReducer,
  order:orderReducer,
  auth:authReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk
      ),
    ),
  )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
