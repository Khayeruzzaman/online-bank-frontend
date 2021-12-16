import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomeController from './Components/Controller/controller';

var token = null;
if(localStorage.getItem('userkey')){
  var obj = localStorage.getItem('userkey');
  token = obj;
}
axios.defaults.baseURL="http://127.0.0.1:8000/api/";
axios.defaults.headers.common['Authorization']=token;

ReactDOM.render(
  <React.StrictMode>
    <HomeController />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
