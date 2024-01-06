import React from 'react';
import Navbar from './Navbars/Navbar';
import Home from './Home/Home';
import Shop from './Shop/Shop';

function App() {
  return (
    <div className='overall-container'>
      
      <Navbar />

      <Home/>
      <Shop/>
    </div>
  );
}

export default App;
