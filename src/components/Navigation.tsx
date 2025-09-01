import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ffebd6]/100 backdrop-blur-md border-b border-[#ec9909]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-[#252627]">D<span className='text-2xl font-bold text-[#ec9909]'>O</span>NDEEZC<span className='text-2xl font-bold text-[#ec9909]'>O</span></h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-[#252627] hover:text-[#ec9909] transition-colors duration-300 font-medium">
                Home
              </Link>
              <Link to="/allrooms" className="text-[#252627] hover:text-[#ec9909] transition-colors duration-300 font-medium">
                Rooms
              </Link>
              <a href="/#amenities" className="text-[#252627] hover:text-[#ec9909] transition-colors duration-300 font-medium">
                Amenities
              </a>
              <Link to="/dining" className="text-[#252627] hover:text-[#ec9909] transition-colors duration-300 font-medium">
                Dining
              </Link>
              <Link to="/contact" className="text-[#252627] hover:text-[#ec9909] transition-colors duration-300 font-medium">
                Contact
              </Link>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Link to="/allrooms">
              <Button className="bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#252627] hover:text-[#ec9909] transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#ffebd6]/95 backdrop-blur-md rounded-lg mt-2">
              <Link to="/" className="block text-[#252627] hover:text-[#ec9909] px-3 py-2 font-medium">
                Home
              </Link>
              <Link to="/allrooms" className="block text-[#252627] hover:text-[#ec9909] px-3 py-2 font-medium">
                Rooms
              </Link>
              <a href="/#amenities" className="block text-[#252627] hover:text-[#ec9909] px-3 py-2 font-medium">
                Amenities
              </a>
              <Link to="/dining" className="block text-[#252627] hover:text-[#ec9909] px-3 py-2 font-medium">
                Dining
              </Link>
              <Link to="/contact" className="block text-[#252627] hover:text-[#ec9909] px-3 py-2 font-medium">
                Contact
              </Link>
              <div className="px-3 py-2">
                <Link to="/allrooms">
                  <Button className="w-full bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold rounded-full">
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