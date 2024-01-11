import React from 'react';
import Navbar from './Navbars/Navbar';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Contact from './Contact/ContactForm';
import Lastpage from './Footer/Lastpage';

function App() {
  return (
    <div className='overall-container'>
      
      <Navbar />

      <Home/>
      <Shop/>
    
            <Contact/>
            <Lastpage/>
  </div>
  );
}

export default App;
