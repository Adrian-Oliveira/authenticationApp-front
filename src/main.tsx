import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './App.tsx'
import './index.scss'
import 'material-icons/iconfont/filled.css';
import 'material-icons/iconfont/outlined.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)