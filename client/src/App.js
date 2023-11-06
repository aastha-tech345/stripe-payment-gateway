import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Success from './component/Success';
import Failure from './component/Failure';
import Cashfree from './file/cashfree/Cashfree';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Routes>
          <Route exact path='/:sessionid?' element={<Cashfree />} />
          <Route exact path='/success' element={<Success />} />
          <Route exact path='/failure' element={<Failure />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
