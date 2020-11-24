import React from 'react';
import ReactDOM from 'react-dom';

const elem1 = React.createElement('span', {
  children: 'Hello World!',
});

const elem2 = React.createElement('span', {
  children: 'and me',
});

const element = React.createElement('div', {
  a: 5,
  b: 10,
  children: [elem1, ' ', elem2],
});

console.log('🚀 ~ file: index.js ~ line 4 ~ element', element);

ReactDOM.render(element, document.querySelector('#root'));
//==========================================================================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
