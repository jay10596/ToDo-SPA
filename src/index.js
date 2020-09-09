import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from "./Demo";
import * as serviceWorker from './serviceWorker';

// ReactDom.render(What I want to render, Where do I want to render it). Usually it would give an error because <> are considered as greater than and Less than signs. However, as we are importing Rect, it will convert it into JSX and work as an HTML element.
// Demo.js (Boilerplate)
// ReactDOM.render(<Demo show="true" />, document.getElementById('root'));

// App.js (Todo app)
ReactDOM.render(<App />, document.getElementById('root'));

// To work offline and load faster, can change unregister() to register()
serviceWorker.unregister();
