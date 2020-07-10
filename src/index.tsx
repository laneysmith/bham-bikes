import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from './components/Map';
import { Header } from './components/Header';
import { Legend } from './components/Legend';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Map />
    <Header />
    <Legend />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
