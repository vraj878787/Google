import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Menu } from './components/Menu';
import { Reservation } from './components/Reservation';
import { ViewState } from './types';
import { ChevronRight, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => (
  <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 py-16 px-4">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="space-y-4">
        <h3 className="text-2xl font-serif text-gold-400 mb-6">Lumière & Sel</h3>
        <p className="font-light text-sm leading-relaxed max-w-xs">
          Experience the harmony of light, salt, and soul. Our seasonally curated menu celebrates the finest local ingredients with global technique.
        </p>
        <div className="flex space-x-4 pt-4">
          <Instagram className="w-5 h-5 hover:text-gold-400 cursor-pointer transition-colors" />
          <Facebook className="w-5 h-5 hover:text-gold-400 cursor-pointer transition-colors" />
          <Twitter className="w-5 h-5 hover:text-gold-400 cursor-pointer transition-colors" />
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-4">Visit Us</h4>
        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0" />
          <span className="text-sm">123 Culinary Avenue,<br/>Metropolis, NY 10012</span>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
          <span className="text-sm">+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
          <span className="text-sm">reservations@lumiere-sel.com</span>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-white uppercase tracking-widest text-sm font-semibold mb-4">Hours</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between border-b border-stone-800 pb-2">
            <span>Tue - Thu</span>
            <span>5:00 PM - 10:00 PM</span>
          </div>
          <div className="flex justify-between border-b border-stone-800 pb-2">
            <span>Fri - Sat</span>
            <span>5:00 PM - 11:00 PM</span>
          </div>
          <div className="flex justify-between border-b border-stone-800 pb-2">
            <span>Sunday</span>
            <span>4:00 PM - 9:30 PM</span>
          </div>
          <div className="flex justify-between text-stone-600 italic pt-1">
            <span>Monday</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-800 text-center text-xs text-stone-600">
      &copy; 2024 Lumière & Sel. All rights reserved.
    </div>
  </footer>
);

const HomeHero: React.FC<{ onReserve: () => void }> = ({ onReserve }) => (
  <div className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://picsum.photos/seed/restaurant_dark_luxury/1920/1080" 
        alt="Hero Background" 
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-900/40 to-stone-950"></div>
    </div>
    
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in-up">
      <p className="text-gold-400 tracking-[0.3em] uppercase text-sm md:text-base mb-6 font-semibold">Est. 2024</p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
        Lumière <span className="text-gold-500">&</span> Sel
      </h1>
      <p className="text-stone-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
        An immersive dining experience where modern gastronomy meets timeless elegance.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button 
          onClick={onReserve}
          className="px-8 py-4 bg-gold-600 text-stone-900 font-bold uppercase tracking-wider hover:bg-gold-500 transition-all transform hover:scale-105 shadow-lg shadow-gold-900/30 rounded-sm w-full sm:w-auto"
        >
          Book a Table
        </button>
        <button className="group flex items-center text-white font-medium hover:text-gold-400 transition-colors uppercase tracking-widest text-sm">
          View Gallery <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

const ContactView: React.FC = () => (
  <div className="min-h-screen bg-stone-950 pt-24 pb-12 px-4 flex items-center justify-center">
    <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 text-stone-300">
       <div className="space-y-6">
          <h2 className="text-4xl font-serif text-gold-400 mb-8">Get in Touch</h2>
          <p>Whether you're planning a private event or have a dietary concern, we're here to assist.</p>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 p-4 bg-stone-900 border border-stone-800 rounded-lg">
              <Phone className="text-gold-500 h-6 w-6" />
              <div>
                <div className="text-xs uppercase text-stone-500 font-bold">Phone</div>
                <div className="text-white">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-stone-900 border border-stone-800 rounded-lg">
              <Mail className="text-gold-500 h-6 w-6" />
              <div>
                <div className="text-xs uppercase text-stone-500 font-bold">Email</div>
                <div className="text-white">hello@lumiere-sel.com</div>
              </div>
            </div>
          </div>
       </div>
       <div className="h-64 md:h-full bg-stone-900 rounded-xl overflow-hidden relative border border-stone-800 group">
          <img src="https://picsum.photos/seed/map_dark/800/600" alt="Map" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
          <div className="absolute inset-0 flex items-center justify-center">
            <MapPin className="h-12 w-12 text-gold-500 drop-shadow-lg animate-bounce" />
          </div>
       </div>
    </div>
  </div>
)

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return <HomeHero onReserve={() => setCurrentView(ViewState.RESERVATIONS)} />;
      case ViewState.MENU:
        return <Menu />;
      case ViewState.RESERVATIONS:
        return <Reservation />;
      case ViewState.CONTACT:
        return <ContactView />;
      default:
        return <HomeHero onReserve={() => setCurrentView(ViewState.RESERVATIONS)} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-gold-500/30 selection:text-gold-200">
      <Navbar currentView={currentView} setView={setCurrentView} />
      <main className="min-h-screen">
        {renderView()}
      </main>
      {currentView !== ViewState.HOME && <Footer />}
    </div>
  );
}
