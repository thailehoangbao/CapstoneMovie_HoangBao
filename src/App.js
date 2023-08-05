import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import renderRoutes from './Routes/Routes';
import Loader from './components/Loader/Loader';


function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            {renderRoutes()}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
