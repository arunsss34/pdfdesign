import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import logout from './logout.jpg'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <a href="/login" className='log_out' ><img src={logout} className='logo_out' /></a> */}
    <App />
  </React.StrictMode>
);

