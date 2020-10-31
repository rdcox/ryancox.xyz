import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './component/Header';
import PageLink from './component/PageLink';
import PageContent from './component/PageContent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header text="Howdy!"></Header>
    <PageContent></PageContent>
    <div className="pagelinks">
      <PageLink text="Kaggle" link="https://www.kaggle.com/ryancox"></PageLink>
      <PageLink text="Github" link="https://github.com/rdcox"></PageLink>
      <PageLink text="Resume" link=""></PageLink>
      <PageLink text="Running" link=""></PageLink>
      <PageLink text="CV" link=""></PageLink>
      <PageLink text="HackerRank" link="https://www.hackerrank.com/rdcox"></PageLink>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
