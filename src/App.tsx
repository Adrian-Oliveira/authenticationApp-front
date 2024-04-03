import { } from 'react';
import { Route, Routes, HashRouter, Navigate} from 'react-router-dom';
import PrivateRoutes from './core/PrivateRoutes';
import { ToastProvider} from 'react-toast-notifications';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';

function App() {

  return (
    <ToastProvider>
      <HashRouter>
        <Routes>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/reset' element={<ResetPasswordPage/>}/>

          <Route element={<PrivateRoutes/>} >
            <Route path='/profile' element={<ProfilePage/>} />
            <Route path='/editProfile' element={<EditProfilePage/>} />
          </Route>   


            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </HashRouter>
    </ToastProvider>
  );
}

export default App
