import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//store
import { Provider } from 'react-redux';
import store from './commen/store';

//css admin
import './adminstration/css/questions_styles.css'
import './adminstration/css/addQ_styles.css'
import './adminstration/css/editQ_styles.css'
import './adminstration/css/admin_login.css'
import './adminstration/css/profile_admin.css'
//

//css user
import './userInterface/css/design.css'
import './userInterface/css/forQuize.css'
import './userInterface/css/signupLogin.css'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>
);
