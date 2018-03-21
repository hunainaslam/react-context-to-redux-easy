import React from 'react';
import {reduxSetup} from 'redux-easy';
import './index.css';
import App, {initialState} from './App';

reduxSetup({component: <App />, initialState});
