import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-wider">
          <span className="text-gradient-silver">SACET</span>
          <span className="text-gold-300 ml-2">RAJATHOTSAV</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-silver-200 hover:text-gold-300 transition-colors text-sm uppercase tracking-widest font-medium">Home</Link>
          <a href="/#events" className="text-silver-200 hover:text-gold-300 transition-colors text-sm uppercase tracking-widest font-medium">Events</a>
          <a href="#contact" className="text-silver-200 hover:text-gold-300 transition-colors text-sm uppercase tracking-widest font-medium">Contact</a>
          <a 
            href="/#events" 
            className="px-6 py-2 border border-gold-400/50 text-gold-300 rounded-full hover:bg-gold-400/10 transition-all text-sm uppercase tracking-widest"
          >
            Register
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-silver-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass-nav border-t border-white/5 py-4 flex flex-col items-center space-y-4"
        >
          <Link to="/" className="text-silver-200 hover:text-gold-300 py-2">Home</Link>
          <a href="/#events" className="text-silver-200 hover:text-gold-300 py-2">Events</a>
          <a href="#contact" className="text-silver-200 hover:text-gold-300 py-2">Contact</a>
          <a 
            href="/#events" 
            className="text-gold-300 font-bold py-2"
          >
            Register
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
