
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Bell, MapPin } from 'lucide-react';
import Button from './Button';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Issues', path: '/issues' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleNotificationClick = () => {
    alert('Notifications feature coming soon!');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-subtle py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="relative h-10 w-10 rounded-full bg-primary flex items-center justify-center mr-2">
              <MapPin className="h-5 w-5 text-white absolute animate-spin-slow" />
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold">UrbanCare</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors duration-300 ${
                  isActive(link.path) 
                    ? 'font-medium text-primary' 
                    : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="p-2 rounded-full hover:bg-secondary/80 transition-colors duration-300"
              onClick={handleNotificationClick}
            >
              <Bell className="h-5 w-5 text-foreground/80" />
            </button>
            <Button variant="ghost" size="sm" className="font-normal" onClick={() => setAuthModalOpen(true)}>
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button onClick={() => setAuthModalOpen(true)}>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-secondary/80 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass mt-3 py-5 px-4 mx-4 rounded-xl animate-scale-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-2 px-3 rounded-lg transition-colors ${
                  isActive(link.path) 
                    ? 'font-medium text-primary bg-secondary/50' 
                    : 'text-foreground/80 hover:bg-secondary/30'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-border/30 my-2"></div>
            <Button className="w-full justify-center" variant="ghost" onClick={() => setAuthModalOpen(true)}>
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button className="w-full justify-center" onClick={() => setAuthModalOpen(true)}>Get Started</Button>
          </div>
        </div>
      )}
      
      {/* Auth Modal */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </nav>
  );
};

export default Navbar;
