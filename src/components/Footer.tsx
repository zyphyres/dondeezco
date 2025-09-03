import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#252627] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">D<span className='text-2xl font-bold text-[#ec9909]'>O</span>NDEEZC<span className='text-2xl font-bold text-[#ec9909]'>O</span></h3>
              <p className="text-[#ec9909] font-medium">Beach Resort</p>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Experience paradise at DONDEEZCO Beach Resort, where luxury meets nature in perfect harmony. 
              Create unforgettable memories in our tropical haven.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-[#ec9909] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#ec9909] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#ec9909] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-[#ec9909] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-white/80 hover:text-[#ec9909] transition-colors text-sm">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-white/80 hover:text-[#ec9909] transition-colors text-sm">
                  Activities
                </Link>
              </li>
              <li>
                <Link to="/dining" className="text-white/80 hover:text-[#ec9909] transition-colors text-sm">
                  Dining
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-[#ec9909] transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-[#ec9909] transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>• Room Service</li>
              <li>• Spa & Wellness</li>
              <li>• Water Sports</li>
              <li>• Island Tours</li>
              <li>• Airport Transfer</li>
              <li>• Event Planning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#ec9909] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-white/80">
                  <p>Paradise Island</p>
                  <p>Philippines 1234</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#ec9909] flex-shrink-0" />
                <span className="text-sm text-white/80">+63 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#ec9909] flex-shrink-0" />
                <span className="text-sm text-white/80">info@dondeezco.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60">
              © 2024 DONDEEZCO Beach Resort. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link to="/terms-of-service" className="text-white/60 hover:text-[#ec9909] transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy-policy" className="text-white/60 hover:text-[#ec9909] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookie-policy" className="text-white/60 hover:text-[#ec9909] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}