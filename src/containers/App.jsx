import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

import '../styles/App.css';

function App() {
  return (
    <div className='app--mobile'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
