import React from 'react';
import { PortafolioProvider } from '../hooks/PortafolioContext';
import { PortafolioContext } from '../hooks/PortafolioContext';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import ModalContact from '../components/ModalContact';

import '../styles/App.css';

function App() {
  const{
    openModalContact,
    setOpenModalContact
  } = React.useContext(PortafolioContext)

  return (
    <PortafolioProvider>
      <div className='app--mobile'>
        <Header />
        <Home />
        <ModalContact>

        </ModalContact>
        <Footer />
      </div>
    </PortafolioProvider>
  );
}

export default App;
