import React from 'react';
import ReactDOM from 'react-dom/client';
import ChatComponent from '../frontend/ChatComponent';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChatComponent />
  </React.StrictMode>
);