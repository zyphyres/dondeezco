import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Users, Bed, Bath, Search, Filter, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const allRooms = [
  {
    id: 1,
    name: 'Ocean View Suite',
    slug: 'ocean-view-suite',
    price: 14950, // ₱299 * 50 (approximate PHP rate)
    image: 'bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]',
    guests: 2,
    beds: '1 King Bed',
    baths: 1,
    size: '45 sqm',
    features: ['Ocean View', 'Balcony', 'WiFi', 'Mini Bar'],
    description: 'Luxurious suite with panoramic ocean views and private balcony',
    category: 'suite'
  },
  {
    id: 2,
    name: 'Beach Villa',
    slug: 'beach-villa',
    price: 29950,
    image: 'bg-gradient-to-br from-[#f5d5a8] to-[#ffebd6]',
    guests: 4,
    beds: '2 King Beds',
    baths: 2,
    size: '120 sqm',
    features: ['Private Beach', 'Pool', 'Kitchen', 'Garden'],
    description: 'Exclusive villa with direct beach access and private pool',
    category: 'villa'
  },
  {
    id: 3,
    name: 'Deluxe Room',
    slug: 'deluxe-room',
    price: 9950,
    image: 'bg-gradient-to-br from-[#ffebd6] via-[#f5d5a8] to-[#ffebd6]',
    guests: 2,
    beds: '1 Queen Bed',
    baths: 1,
    size: '35 sqm',
    features: ['Garden View', 'WiFi', 'Coffee', 'AC'],
    description: 'Comfortable room with modern amenities and garden views',
    category: 'room'
  },
  {
    id: 4,
    name: 'Presidential Suite',
    slug: 'presidential-suite',
    price: 49950,
    image: 'bg-gradient-to-br from-[#f5d5a8] via-[#ffebd6] to-[#f5d5a8]',
    guests: 6,
    beds: '3 King Beds',
    baths: 3,
    size: '200 sqm',
    features: ['Panoramic View', 'Private Pool', 'Butler Service', 'Jacuzzi'],
    description: 'Ultimate luxury with private pool and dedicated butler service',
    category: 'suite'
  },
  {
    id: 5,
    name: 'Family Room',
    slug: 'family-room',
    price: 19950,
    image: 'bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]',
    guests: 4,
    beds: '2 Queen Beds',
    baths: 2,
    size: '60 sqm',
    features: ['Connecting Rooms', 'Kids Area', 'WiFi', 'Kitchenette'],
    description: 'Perfect for families with connecting rooms and kids area',
    category: 'room'
  },
  {
    id: 6,
    name: 'Honeymoon Suite',
    slug: 'honeymoon-suite',
    price: 24950,
    image: 'bg-gradient-to-br from-[#f5d5a8] to-[#ffebd6]',
    guests: 2,
    beds: '1 King Bed',
    baths: 1,
    size: '55 sqm',
    features: ['Romantic Decor', 'Jacuzzi', 'Champagne', 'Rose Petals'],
    description: 'Romantic suite perfect for couples and special occasions',
    category: 'suite'
  }
];

export default function AllRooms() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');

  const filteredRooms = allRooms.filter(room => {
    const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         room.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || room.category === categoryFilter;
    const matchesPrice = priceFilter === 'all' || 
                        (priceFilter === 'low' && room.price < 15000) ||
                        (priceFilter === 'mid' && room.price >= 15000 && room.price < 30000) ||
                        (priceFilter === 'high' && room.price >= 30000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#252627] mb-4">
              All <span className="text-[#ec9909]">Accommodations</span>
            </h1>
            <p className="text-xl text-[#252627]/70 max-w-3xl mx-auto">
              Discover our complete collection of luxury rooms, suites, and villas
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-[#ffebd6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#252627]/50" size={20} />
                <Input
                  placeholder="Search rooms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-[#ffebd6] focus:border-[#ec9909]"
                />
              </div>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-48 border-[#ffebd6] focus:border-[#ec9909]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="room">Rooms</SelectItem>
                  <SelectItem value="suite">Suites</SelectItem>
                  <SelectItem value="villa">Villas</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger className="w-full sm:w-48 border-[#ffebd6] focus:border-[#ec9909]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under ₱15,000</SelectItem>
                  <SelectItem value="mid">₱15,000 - ₱30,000</SelectItem>
                  <SelectItem value="high">Above ₱30,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="text-[#252627]/70">
              {filteredRooms.length} room{filteredRooms.length !== 1 ? 's' : ''} found
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <Card key={room.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                {/* Room Image */}
                <div className={`h-64 ${room.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[#252627]/10 group-hover:bg-[#252627]/5 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#ec9909] text-white font-semibold hover:bg-[#d88708]">
                      ₱{room.price.toLocaleString()}/night
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-[#252627] capitalize">
                      {room.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-[#252627]">
                    <h3 className="text-xl font-bold mb-1">{room.name}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#ec9909] text-[#ec9909]" />
                      ))}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Room Info */}
                  <div className="flex items-center justify-between mb-4 text-[#252627]/70 text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>{room.guests} Guests</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Bed size={16} />
                        <span>{room.beds}</span>
                      </div>
                    </div>
                    <div className="text-[#252627] font-medium">{room.size}</div>
                  </div>

                  {/* Description */}
                  <p className="text-[#252627]/70 mb-4 leading-relaxed text-sm">
                    {room.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-[#ffebd6] text-[#252627] hover:bg-[#f5d5a8]">
                        {feature}
                      </Badge>
                    ))}
                    {room.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-[#ffebd6] text-[#252627]">
                        +{room.features.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to={`/room/${room.slug}`} className="flex-1">
                      <Button variant="outline" className="w-full border-2 border-[#ec9909] text-[#ec9909] hover:bg-[#ec9909] hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                        View Details
                      </Button>
                    </Link>
                    <Link to={`/payment?room=${room.slug}`} className="flex-1">
                      <Button className="w-full bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRooms.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🏨</div>
              <h3 className="text-2xl font-bold text-[#252627] mb-2">No rooms found</h3>
              <p className="text-[#252627]/70 mb-6">Try adjusting your search criteria</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('all');
                  setPriceFilter('all');
                }}
                className="bg-[#ec9909] hover:bg-[#d88708] text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}