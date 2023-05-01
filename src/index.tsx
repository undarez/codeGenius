import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Layout from './layout/Layout';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);