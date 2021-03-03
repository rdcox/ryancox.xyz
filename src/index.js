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
    
    <div className="project">
      <img src="https://i.pinimg.com/originals/3b/d9/79/3bd979216dc79eb5fef530ced89f9e06.gif" alt="this slowpoke moves"></img>
    </div>
    <div className="project">
      <img src="http://i.stack.imgur.com/SBv4T.gif" alt="this slowpoke moves"></img>
    </div>
    <div className="project">
      <img src="https://i.pinimg.com/originals/3b/d9/79/3bd979216dc79eb5fef530ced89f9e06.gif" alt="construction"></img>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
