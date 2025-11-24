import React, { useState } from 'react';
import { ViewState } from '../types';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { view: ViewState.HOME, label: 'Home' },
    { view: ViewState.MENU, label: 'Menu' },
    { view: ViewState.RESERVATIONS, label: 'Reservations' },
    { view: ViewState.CONTACT, label: 'Contact' },
  ];

  const handleNav = (view: ViewState) => {
    setView(view);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => handleNav(ViewState.HOME)}>
            <UtensilsCrossed className="h-8 w-8 text-gold-400 mr-2" />
            <span className="font-serif text-2xl text-stone-100 font-bold tracking-widest">Lumière & Sel</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.view)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    currentView === link.view
                      ? 'text-gold-400'
                      : 'text-stone-300 hover:text-gold-400'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-800 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-900 border-b border-stone-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.view)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentView === link.view
                    ? 'text-gold-400 bg-stone-800'
                    : 'text-stone-300 hover:text-gold-400 hover:bg-stone-800'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
