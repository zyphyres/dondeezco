import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="w-full h-full bg-gradient-to-br from-[#ffebd6] via-[#ffebd6] to-[#f5d5a8] relative">
          {/* Placeholder for video - using animated gradient for now */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#ffebd6]/90 via-[#ffebd6]/80 to-[#f5d5a8]/90 animate-pulse"></div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center" >
          </div>
          
          {/* Animated waves effect */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg className="relative block w-full h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white/10 animate-pulse"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
         {/* Floating Elements
        <div className="absolute top-20 left-10 w-20 h-20 -z-0 bg-[#ec9909]/20 rounded-full backdrop-blur-sm animate-bounce delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 z-0 bg-[#ffebd6]/30 rounded-full backdrop-blur-sm animate-bounce delay-1500"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 z-0 bg-[#ec9909]/30 rounded-full backdrop-blur-sm animate-bounce delay-2000"></div> */}

        {/* Main Brand Text */}
        <div className="mb-0 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <img src="/logo.png" alt="Dondeezco Logo" className="mx-auto w-95 z-999 h-auto mb-0" />
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          {/* Location and Rating */}
          <div className="flex items-center justify-center space-x-6 mt-0 text-[#fff]/70">
            <div className="flex items-center space-x-2">
              <MapPin size={20} />
              <span className="text-lg">Siquijor Island</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star size={20} className="fill-[#ec9909] text-[#ec9909]" />
              <span className="text-lg">5-Star Resort</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <Link to="/rooms">
          <Button size="lg" style={{ width: "230px"}} className="bg-[#ec9909] w hover:bg-[#d88708] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
            <Calendar className="mr-2" size={20} />
            Book Your Stay
          </Button>
          </Link>
          
          <Button size="lg" style={{ width: "230px"}} variant="outline" className="border-2 border-[#ec9909] text-[#ec9909] hover:bg-[#ec9909] hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
            Explore Resort
          </Button>
        </div>

       
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#fff]/100 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#fff]/100 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}