import { } from 'react';
import { Route, Routes, HashRouter} from 'react-router-dom';
import { ToastProvider} from 'react-toast-notifications';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import SeeImage from './pages/SeeImage';

function App() {

  return (
    <ToastProvider>
      <HashRouter>
        <Routes>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/reset' element={<ResetPasswordPage/>}/>
        </Routes>
      </HashRouter>
    </ToastProvider>
  );
}

export default App
