import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Activities', href: '/activities' },
    { name: 'Dining', href: '/dining' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-[#252627]">
              D<span className='text-2xl font-bold text-[#ec9909]'>O</span>NDEEZC<span className='text-2xl font-bold text-[#ec9909]'>O</span>
            </div>
            <div className="text-sm text-[#ec9909] font-medium">
              Beach Resort
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-[#252627] hover:text-[#ec9909] font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info & Book Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-[#252627]/70">
              <Phone size={16} />
              <span>+63 123 456 7890</span>
            </div>
            <Link to="/rooms">
              <Button className="bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#252627]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-[#252627] hover:text-[#ec9909] font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 border-t border-gray-200 mt-2">
                <div className="flex items-center space-x-2 text-sm text-[#252627]/70 mb-2">
                  <Phone size={16} />
                  <span>+63 123 456 7890</span>
                </div>
                <Link to="/rooms" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold py-2 rounded-full">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}