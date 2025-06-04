
import React, { useState } from 'react';
import CasperFriendlyGhostLogo from './Logo';
import { APP_NAME, NAVIGATION_LINKS } from '../constants';
import type { NavLink } from '../types';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2">
            <CasperFriendlyGhostLogo size={48} />
            <span className="font-brand text-3xl text-casper-teal">{APP_NAME}</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {NAVIGATION_LINKS.map((link: NavLink) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-slate-600 hover:text-casper-teal transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-casper-teal focus:outline-none"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4">
          <nav className="flex flex-col space-y-3 px-4">
            {NAVIGATION_LINKS.map((link: NavLink) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-600 hover:text-casper-teal py-2 rounded-md text-center font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
