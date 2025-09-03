import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, MapPin, Waves, Camera, Utensils, Heart } from 'lucide-react';

export default function Activities() {
  const activities = [
    {
      id: 1,
      name: 'Island Hopping Adventure',
      category: 'Water Sports',
      duration: '8 hours',
      price: '₱3,500',
      rating: 4.9,
      maxGuests: 12,
      image: 'bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]',
      description: 'Explore pristine islands, snorkel in crystal-clear waters, and enjoy a beachside barbecue lunch.',
      highlights: ['3 Island stops', 'Snorkeling gear included', 'Lunch provided', 'Professional guide'],
      icon: <Waves className="w-6 h-6" />
    },
    {
      id: 2,
      name: 'Sunset Photography Tour',
      category: 'Photography',
      duration: '3 hours',
      price: '₱2,200',
      rating: 4.8,
      maxGuests: 8,
      image: 'bg-gradient-to-br from-[#f5d5a8] to-[#ffebd6]',
      description: 'Capture stunning sunset moments at the most photogenic spots around the resort.',
      highlights: ['Professional photographer guide', 'Equipment provided', 'Photo editing tips', 'Digital copies included'],
      icon: <Camera className="w-6 h-6" />
    },
    {
      id: 3,
      name: 'Spa & Wellness Package',
      category: 'Wellness',
      duration: '4 hours',
      price: '₱4,800',
      rating: 5.0,
      maxGuests: 2,
      image: 'bg-gradient-to-br from-[#ffebd6] via-[#f5d5a8] to-[#ffebd6]',
      description: 'Rejuvenate with traditional Filipino massage, facial treatments, and wellness consultation.',
      highlights: ['Full body massage', 'Facial treatment', 'Aromatherapy session', 'Healthy refreshments'],
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 4,
      name: 'Culinary Experience',
      category: 'Dining',
      duration: '5 hours',
      price: '₱3,200',
      rating: 4.9,
      maxGuests: 10,
      image: 'bg-gradient-to-br from-[#f5d5a8] to-[#ffebd6]',
      description: 'Learn to cook authentic Filipino dishes with our executive chef and enjoy your creations.',
      highlights: ['Cooking class', 'Market tour', '4-course meal', 'Recipe booklet'],
      icon: <Utensils className="w-6 h-6" />
    },
    {
      id: 5,
      name: 'Scuba Diving Expedition',
      category: 'Water Sports',
      duration: '6 hours',
      price: '₱5,500',
      rating: 4.8,
      maxGuests: 6,
      image: 'bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]',
      description: 'Discover underwater wonders with certified dive masters at premier diving spots.',
      highlights: ['2 dive sites', 'Equipment included', 'Certified instructors', 'Underwater photos'],
      icon: <Waves className="w-6 h-6" />
    },
    {
      id: 6,
      name: 'Cultural Heritage Tour',
      category: 'Culture',
      duration: '7 hours',
      price: '₱2,800',
      rating: 4.7,
      maxGuests: 15,
      image: 'bg-gradient-to-br from-[#f5d5a8] via-[#ffebd6] to-[#f5d5a8]',
      description: 'Immerse yourself in local culture, visit historical sites, and meet local artisans.',
      highlights: ['Historical sites', 'Local artisan visits', 'Traditional lunch', 'Cultural performances'],
      icon: <MapPin className="w-6 h-6" />
    }
  ];

  const categories = ['All', 'Water Sports', 'Photography', 'Wellness', 'Dining', 'Culture'];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#252627] mb-6">
            Resort <span className="text-[#ec9909]">Activities</span>
          </h1>
          <p className="text-xl text-[#252627]/80 max-w-3xl mx-auto mb-8">
            Discover unforgettable experiences and create lasting memories with our curated selection of activities and excursions
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className={category === 'All' 
                  ? 'bg-[#ec9909] hover:bg-[#d88708] text-white' 
                  : 'border-[#ec9909] text-[#ec9909] hover:bg-[#ec9909] hover:text-white'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <Card key={activity.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className={`h-48 ${activity.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[#252627]/20 group-hover:bg-[#252627]/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-white">
                      {activity.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#ec9909] text-white font-semibold">
                      {activity.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-[#252627] font-semibold">
                      {activity.price}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{activity.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>Max {activity.maxGuests}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                        <span>{activity.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#252627] mb-2">{activity.name}</h3>
                  <p className="text-[#252627]/70 mb-4">{activity.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-[#252627] text-sm">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {activity.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="bg-[#ffebd6] text-[#252627] text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" className="flex-1 border-[#ec9909] text-[#ec9909] hover:bg-[#ec9909] hover:text-white transition-all duration-300">
                      Learn More
                    </Button>
                    <Button className="flex-1 bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold transition-all duration-300 transform hover:scale-105">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#ec9909] to-[#d88708]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Adventure?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Book multiple activities and save up to 20% with our adventure packages
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#ec9909] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
              View Packages
            </Button>
            <Button variant="outline" className="border-2 border-white text-[#ec9909] font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#ec9909] transition-all duration-300">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}