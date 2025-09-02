import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Bed, Bath, Wifi, Coffee, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Rooms() {
  const rooms = [
    {
      id: 1,
      name: 'Ocean View Suite',
      slug: 'ocean-view-suite',
      price: '₱14,950',
      image: 'bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]',
      guests: 2,
      beds: 1,
      baths: 1,
      features: ['Ocean View', 'Balcony', 'WiFi', 'Mini Bar'],
      description: 'Luxurious suite with panoramic ocean views and private balcony'
    },
    {
      id: 2,
      name: 'Beach Villa',
      slug: 'beach-villa',
      price: '₱29,950',
      image: 'bg-gradient-to-br from-[#f5d5a8] to-[#ffebd6]',
      guests: 4,
      beds: 2,
      baths: 2,
      features: ['Private Beach', 'Pool', 'Kitchen', 'Garden'],
      description: 'Exclusive villa with direct beach access and private pool'
    },
    {
      id: 3,
      name: 'Deluxe Room',
      slug: 'deluxe-room',
      price: '₱9,950',
      image: 'bg-gradient-to-br from-[#ffebd6] via-[#f5d5a8] to-[#ffebd6]',
      guests: 2,
      beds: 1,
      baths: 1,
      features: ['Garden View', 'WiFi', 'Coffee Maker', 'AC'],
      description: 'Comfortable room with modern amenities and garden views'
    }
  ];

  return (
    <section id="rooms" className="py-16 bg-gradient-to-br from-[#ffebd6]/30 to-[#f5d5a8]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#252627] mb-4">
            Our <span className="text-[#ec9909]">Rooms</span>
          </h2>
          <p className="text-lg text-[#252627]/70 max-w-2xl mx-auto">
            Choose from our selection of beautifully appointed rooms and suites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {rooms.map((room) => (
            <Card key={room.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <div className={`h-48 ${room.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[#252627]/20 group-hover:bg-[#252627]/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#ec9909] text-white font-semibold">
                    {room.price}/night
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{room.name}</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{room.guests}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bed size={16} />
                      <span>{room.beds}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Bath size={16} />
                      <span>{room.baths}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-[#252627]/70 mb-4">{room.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="bg-[#ffebd6] text-[#252627] text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Link to={`/room/${room.slug}`} className="flex-1">
                    <Button variant="outline" className="w-full border-[#ec9909] text-[#ec9909] hover:bg-[#ec9909] hover:text-white transition-all duration-300">
                      View Details
                    </Button>
                  </Link>
                  <Link to="/rooms" className="flex-1">
                    <Button className="w-full bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold transition-all duration-300 transform hover:scale-105">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/rooms">
            <Button className="bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Waves className="mr-2" size={20} />
              View All Rooms
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}