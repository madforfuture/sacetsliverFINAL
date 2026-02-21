import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-luxury-gray border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              <span className="text-gradient-silver">SACET</span>
              <span className="text-gold-300 ml-2">RAJATHOTSAV</span>
            </h3>
            <p className="text-silver-400 text-sm leading-relaxed mb-6">
              Celebrating 25 years of excellence in technical education and innovation. Join us for the grand Silver Jubilee celebration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-silver-400 hover:text-gold-300 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-silver-400 hover:text-gold-300 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-silver-400 hover:text-gold-300 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-silver-100 mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-silver-400">
              <li><a href="#" className="hover:text-gold-300 transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-gold-300 transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-gold-300 transition-colors">Sponsors</a></li>
              <li><a href="#" className="hover:text-gold-300 transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-silver-100 mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-silver-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-gold-400 shrink-0 mt-0.5" />
                <span>SACET Campus, Chirala,<br />Andhra Pradesh, India - 523155</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-gold-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-gold-400 shrink-0" />
                <span>info@sacet.ac.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-silver-500">
          <p>&copy; 2026 SACET. All rights reserved. Designed for Rajathotsav.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
