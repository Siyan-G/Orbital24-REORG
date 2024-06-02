import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryProvider } from './ReactQuery/QueryProvider';

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <QueryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </QueryProvider>
    </React.StrictMode>
  );
}