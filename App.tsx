
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Roadmap from './components/Roadmap';
import HowToBuy from './components/HowToBuy';
import Community from './components/Community';
import Footer from './components/Footer';
import { APP_NAME } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-sky-50 text-slate-800">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Roadmap />
        <HowToBuy />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default App;
