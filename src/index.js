import React from 'react'; // it`s not used any more. We are using jsx.
import ReactDOM from 'react-dom';
import App from './App';
// import paintings from './paintings.json';
// const data = paintings[0];

// const painting = paintings[1];
// const painting = (
//   <div>
//     <img src={imageUrl} alt={title} width="480" />
//     <h2>{title}</h2>
//     <p>
//       Автор: <a href={profileUrl}>{author}</a>
//     </p>
//     <p>Цена: {price} кредитов</p>
//     <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );

// {
/* <Painting
  url={painting.url}
  title={painting.title}
  authorName={painting.author.tag}
  authorUrl={painting.author.url}
  price={painting.price}
  quantity={painting.quantity}
/>; */
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

//=========================================================
// const elem1 = React.createElement('span', {
//   children: 'Hello World!',
// });

// const elem2 = React.createElement('span', {
//   children: 'and me',
// });

// const elem1 = <span>Hello</span>;
// const elem2 = <span>World!</span>;

// const element = React.createElement('div', {
//   a: 5,
//   b: 10,
//   children: 'Hello world!',
// });

// const jsxElement = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log(jsxElement);

// ReactDOM.render(jsxElement, document.querySelector('#root'));
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
