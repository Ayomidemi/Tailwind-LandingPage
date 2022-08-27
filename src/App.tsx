import React from 'react';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import NewsLetter from './components/NewsLetter';
import Subscription from './components/Subscription';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Analytics />
      <NewsLetter />
      <Subscription />
      <Footer />
    </div>
  );
}

export default App;