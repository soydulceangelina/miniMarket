import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import Home from './pages/home/Home';
import reportWebVitals from './reportWebVitals';
import store from './store';
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Home />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();