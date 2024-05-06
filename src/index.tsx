import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRoutes from './routes/routes';
import GlobalStyles from './styles/globalStyles';

import './index.css'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <MyRoutes/>
  </React.StrictMode>
);

