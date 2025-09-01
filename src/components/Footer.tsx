import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-[#252627] to-[#1a1b1c] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-[#ffebd6] bg-clip-text text-transparent">
              DONDEEZCO
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience luxury and tranquility at our beachfront paradise. Where every moment becomes a cherished memory.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="p-2 hover:bg-[#ec9909]/20 rounded-full text-[#ffebd6] hover:text-[#ec9909]">
                <Facebook size={20} />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-[#ec9909]/20 rounded-full text-[#ffebd6] hover:text-[#ec9909]">
                <Instagram size={20} />
              </Button>
              <Button size="sm" variant="ghost" className="p-2 hover:bg-[#ec9909]/20 rounded-full text-[#ffebd6] hover:text-[#ec9909]">
                <Twitter size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#ffebd6]">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-[#ec9909] transition-colors duration-300">Home</a></li>
              <li><a href="#rooms" className="text-gray-300 hover:text-[#ec9909] transition-colors duration-300">Rooms & Suites</a></li>
              <li><a href="#amenities" className="text-gray-300 hover:text-[#ec9909] transition-colors duration-300">Amenities</a></li>
              <li><a href="#dining" className="text-gray-300 hover:text-[#ec9909] transition-colors duration-300">Dining</a></li>
              <li><a href="#spa" className="text-gray-300 hover:text-[#ec9909] transition-colors duration-300">Spa & Wellness</a></li>
              <li><a href="#activities" className="text-gray-300 hover:text-[#ec9909] transition-colors duration-300">Activities</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#ffebd6]">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#ec9909] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Barangay Dumanhug</p>
                  <p className="text-gray-300"> Siquijor Island, Siquijor, Philippines</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-[#ec9909] flex-shrink-0" />
                <p className="text-gray-300">+63 (912) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-[#ec9909] flex-shrink-0" />
                <p className="text-gray-300">info@dondeezco.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-[#ffebd6]">Stay Updated</h4>
            <p className="text-gray-300 mb-4">Subscribe to receive exclusive offers and resort updates.</p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-[#ffebd6]/10 border-[#ffebd6]/20 text-white placeholder:text-gray-400 focus:border-[#ec9909]"
              />
              <Button className="w-full bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold rounded-full transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#ffebd6]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 DONDEEZCO Beach Resort. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#ec9909] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#ec9909] transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#ec9909] transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}