import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'fomantic-ui-css/semantic.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
