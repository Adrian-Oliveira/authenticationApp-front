import { } from 'react';
import { Route, Routes, HashRouter} from 'react-router-dom';
import { ToastProvider} from 'react-toast-notifications';
import UploadFile from './pages/UpdateFile';
import SeeImage from './pages/SeeImage';

function App() {

  return (
    <ToastProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<UploadFile/>}/>
          <Route path='/image/:imageID' element={<SeeImage/>}/>

        </Routes>
      </HashRouter>
    </ToastProvider>
  );
}

export default App
