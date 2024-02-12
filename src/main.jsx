import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { reducer, reducerData } from './Service/Reducer';
import { AppProvider } from './Service/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider reducer = {reducer} reducerData={reducerData}>
    <App />
  </AppProvider>
);


