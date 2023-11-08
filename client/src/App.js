import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Success from './component/Success';
import Failure from './component/Failure';
import { Hosted } from './file/stripe/Hosted';
import Return from './file/stripe/Embedded/Return';
import Embedded from './file/stripe/Embedded';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Routes>
          {/* Hosted part */}
          <Route exact path='/hosted' element={<Hosted />} />
          <Route exact path='/success' element={<Success />} />
          <Route exact path='/failure' element={<Failure />} />

          {/* Embedded part */}
          <Route exact path='/embedded' element={<Embedded />} />
          <Route exact path="/return" element={<Return />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
