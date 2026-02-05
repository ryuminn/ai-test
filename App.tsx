import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionDivider from './components/SectionDivider';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import Shorts from './components/Shorts';
import Message from './components/Message';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-stone-200 selection:text-stone-900">
      <Navbar />
      
      <main>
        <Hero />
        
        <SectionDivider />
        <Profile />
        
        <SectionDivider />
        <Gallery />
        
        <Shorts />
        
        <Message />
      </main>

      <Footer />
    </div>
  );
};

export default App;
