import { } from 'react';
import { Route, Routes, HashRouter} from 'react-router-dom';
import { ToastProvider} from 'react-toast-notifications';
import RegisterPage from './pages/RegisterPage';
import SeeImage from './pages/SeeImage';

function App() {

  return (
    <ToastProvider>
      <HashRouter>
        <Routes>
          <Route path='/login' element={<RegisterPage/>}/>
        </Routes>
      </HashRouter>
    </ToastProvider>
  );
}

export default App
