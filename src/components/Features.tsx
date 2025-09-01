import { Card, CardContent } from '@/components/ui/card';
import { Waves, Utensils, Wifi, Car, Dumbbell, Heart } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Waves,
      title: 'Private Beach Access',
      description: 'Exclusive access to pristine white sand beaches and crystal-clear waters'
    },
    {
      icon: Utensils,
      title: 'Fine Dining',
      description: 'World-class restaurants featuring local and international cuisine'
    },
    {
      icon: Heart,
      title: 'Luxury Spa',
      description: 'Rejuvenating treatments and wellness experiences by the ocean'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'State-of-the-art gym with ocean views and personal trainers'
    },
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Complimentary high-speed internet throughout the resort'
    },
    {
      icon: Car,
      title: 'Valet Parking',
      description: 'Complimentary valet parking and airport shuttle service'
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#252627] mb-4">
            Resort <span className="text-[#ec9909]">Amenities</span>
          </h2>
          <p className="text-xl text-[#252627]/70 max-w-3xl mx-auto">
            Discover world-class amenities designed to make your stay unforgettable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ec9909] to-[#d88708] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#252627] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#252627]/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}