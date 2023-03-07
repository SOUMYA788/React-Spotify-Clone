import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { reducer, reducerData } from './Service/Reducer';
import { AppProvider } from './Service/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider reducer = {reducer} reducerData={reducerData}>
    <App />
  </AppProvider>
);

reportWebVitals();
