import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import { Provider } from 'react-redux';
import { configureStore} from '@reduxjs/toolkit';
import mainReducer from "../src/redux/reducers/mainReducers"


const reduxStore = configureStore({reducer : mainReducer})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={reduxStore}>  
  <BrowserRouter>
  <ScrollToTop/>
    <App />
  </BrowserRouter>
  </Provider>
);



