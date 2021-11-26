import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from '../src/Context/Provider'
import {ThemeProvider} from '../src/Context/ThemeProvider'

ReactDOM.render(
  <React.StrictMode>
  <Provider>
  <ThemeProvider>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </ThemeProvider>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );
  