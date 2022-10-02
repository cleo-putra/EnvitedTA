import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Event from './components/Event/Event';
import Homepage from './components/Homepage/Homepage'

function App() {
  return (
    <div className='bg-[#EDE5FF]'>

    <Router>
      <Routes>
        <Route exact path='/' element={< Homepage />}></Route>
        <Route exact path='/event' element={< Event />}></Route>
                 
      </Routes>
    </Router>
    </div>
  );
}

export default App;
