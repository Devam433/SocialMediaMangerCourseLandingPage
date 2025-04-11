import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navitems } from '../data.js';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileViewOpen, setIsMobileViewOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : ''
    } border-b border-blue-950 bg-black opacity-95 text-white shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full h-20 justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* <img src="LOGO.png" alt="Smart Skills Academy" className="h-12 w-12 object-contain" /> */}
            <img src="Logo Full size.png" alt="Smart Skills Academy" className="h-10 object-contain" />
            {/* <p className="text-2xl font-bold">Smart Skills Academy</p> */}
          </div>
          
          <nav className="flex flex-row gap-8">
            {navitems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-200 text-lg font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <button className="px-6 py-2.5 bg-white text-blue-950 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200">
            Enroll Now
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
            <img src="Logo Full size.png" alt="Smart Skills Academy" className="h-10 object-contain" />
              {/* <p className="text-lg font-bold">Smart Skills Academy</p> */}
            </div>
            
            <button
              onClick={() => setIsMobileViewOpen(!isMobileViewOpen)}
              className="p-2 rounded-lg hover:bg-blue-900 transition-colors duration-200"
            >
              {isMobileViewOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileViewOpen && (
            <div className="absolute top-16 left-0 right-0 bg-blue-950 border-t border-blue-900 shadow-xl">
              <nav className="flex flex-col px-4 py-2">
                {navitems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="py-3 px-4 text-white/90 hover:text-white hover:bg-blue-900 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileViewOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="p-4">
                  <button className="w-full px-6 py-2.5 bg-white text-blue-950 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200">
                    Enroll Now
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;