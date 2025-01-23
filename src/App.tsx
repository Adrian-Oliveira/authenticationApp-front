import { } from 'react';
import { Route, Routes, HashRouter, Navigate} from 'react-router-dom';
import PrivateRoutes from './core/PrivateRoutes';
import { ToastProvider} from 'react-toast-notifications';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import Register2FAPage from './pages/Register2FA';

import { Step1 } from './pages/ResetPasswordPage/Step1';
import { Step2 } from './pages/ResetPasswordPage/Step2';
import { Step3 } from './pages/ResetPasswordPage/Step3';

function App() {

  return (
    <ToastProvider>
      <HashRouter>
        <Routes>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>

          <Route path='/reset' element={<ResetPasswordPage/>}>
            <Route path='step1' element={<Step1/>} />
            <Route path='step2' element={<Step2/>} />
          </Route>

          <Route element={<PrivateRoutes/>} >
            <Route path='/profile' element={<ProfilePage/>} />
            <Route path='/editProfile' element={<EditProfilePage/>} />
            <Route path='/changePassword' element={<ChangePasswordPage/>} />
            <Route path='/registerTwoFA' element={<Register2FAPage/>} />
          </Route>   


          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </HashRouter>
    </ToastProvider>
  );
}

export default App