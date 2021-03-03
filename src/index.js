import React from 'react';
import ReactDOM from 'react-dom';
import './assets/win95.css'
import './index.css'
import Header from './component/Header';
import PageLink from './component/PageLink';
import ImageCard from './component/ImageCard';
import TextCard from './component/TextCard';
import * as serviceWorker from './serviceWorker';

// TODO: Add Resume page
// TODO: Add Running page
ReactDOM.render(
  <React.StrictMode>
    <Header text="Howdy!"></Header>
    
    <div className="page-content">
      <div className="image-card-container">
        <ImageCard></ImageCard>
      </div>
      <div className="text-card-container">      
        <TextCard></TextCard>
      </div>
    </div>
    
    <div className="table-container">
      <table className="table-bordered">
        <thead>
          <tr>
            <th>
              Links
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <PageLink text="Github" link="https://github.com/rdcox"></PageLink>
            </td>
            <td>
              <PageLink text="Resume" link=""></PageLink>
            </td>
            <td>
              <PageLink text="LinkedIn" link="https://www.linkedin.com/in/ryan-cox-81228191/"></PageLink>
            </td>
          </tr>
          <tr>
            <td>
              <PageLink text="Kaggle" link="https://www.kaggle.com/ryancox"></PageLink>
            </td>
            <td>
              <PageLink text="Twitter" link="https://twitter.com/BonziBu99067986"></PageLink>
            </td>
            <td>
              <PageLink text="HackerRank" link="https://www.hackerrank.com/rdcox"></PageLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
