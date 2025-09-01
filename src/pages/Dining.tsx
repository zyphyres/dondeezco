import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Phone, Star, Utensils } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const restaurants = [
  {
    name: 'Ocean Breeze Restaurant',
    description: 'Fine dining with panoramic ocean views',
    image: 'bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]',
    cuisine: 'International',
    hours: '6:00 AM - 11:00 PM',
    location: 'Main Building, Ground Floor'
  },
  {
    name: 'Sunset Beach Bar',
    description: 'Casual beachfront dining and cocktails',
    image: 'bg-gradient-to-br from-[#f5d5a8] to-[#ffebd6]',
    cuisine: 'Bar & Grill',
    hours: '11:00 AM - 2:00 AM',
    location: 'Beachfront'
  },
  {
    name: 'Tropical Café',
    description: 'Light meals and premium coffee',
    image: 'bg-gradient-to-br from-[#ffebd6] via-[#f5d5a8] to-[#ffebd6]',
    cuisine: 'Café',
    hours: '6:00 AM - 6:00 PM',
    location: 'Lobby Level'
  }
];

const menuSections = [
  {
    title: 'Breakfast',
    time: '6:00 AM - 11:00 AM',
    items: [
      { name: 'Continental Breakfast', description: 'Fresh fruits, pastries, cereals, coffee/tea', price: 850 },
      { name: 'Filipino Breakfast', description: 'Longsilog, tapsilog, or bangsilog with rice and egg', price: 650 },
      { name: 'American Breakfast', description: 'Eggs, bacon, sausage, hash browns, toast', price: 750 },
      { name: 'Pancakes Stack', description: 'Fluffy pancakes with maple syrup and butter', price: 450 },
      { name: 'Fresh Fruit Bowl', description: 'Seasonal tropical fruits', price: 350 },
      { name: 'Omelette', description: 'Choice of cheese, ham, mushroom, or vegetable', price: 550 }
    ]
  },
  {
    title: 'Lunch & Dinner',
    time: '12:00 PM - 10:00 PM',
    items: [
      { name: 'Grilled Seafood Platter', description: 'Fresh catch of the day with vegetables', price: 1850 },
      { name: 'Beef Tenderloin', description: 'Premium cut with mashed potatoes and gravy', price: 2250 },
      { name: 'Chicken Adobo', description: 'Traditional Filipino dish with rice', price: 850 },
      { name: 'Pasta Marinara', description: 'Fresh tomato sauce with herbs and parmesan', price: 750 },
      { name: 'Caesar Salad', description: 'Crisp romaine lettuce with classic dressing', price: 650 },
      { name: 'Fish & Chips', description: 'Beer battered fish with crispy fries', price: 950 }
    ]
  },
  {
    title: 'Beverages',
    time: 'All Day',
    items: [
      { name: 'Fresh Coconut Water', description: 'Straight from the coconut', price: 150 },
      { name: 'Tropical Smoothie', description: 'Mango, pineapple, or mixed berry', price: 250 },
      { name: 'Premium Coffee', description: 'Espresso, cappuccino, or latte', price: 180 },
      { name: 'Fresh Juice', description: 'Orange, apple, or pineapple', price: 200 },
      { name: 'Local Beer', description: 'San Miguel or Red Horse', price: 120 },
      { name: 'House Wine', description: 'Red or white wine by the glass', price: 350 }
    ]
  },
  {
    title: 'Desserts',
    time: 'All Day',
    items: [
      { name: 'Halo-Halo', description: 'Traditional Filipino shaved ice dessert', price: 280 },
      { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with vanilla ice cream', price: 450 },
      { name: 'Mango Float', description: 'Layered mango and cream dessert', price: 320 },
      { name: 'Ice Cream Sundae', description: 'Three scoops with toppings', price: 380 },
      { name: 'Fresh Fruit Tart', description: 'Seasonal fruits on pastry base', price: 420 },
      { name: 'Leche Flan', description: 'Classic Filipino custard dessert', price: 250 }
    ]
  }
];

export default function Dining() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#252627] mb-4">
              Dining <span className="text-[#ec9909]">Experience</span>
            </h1>
            <p className="text-xl text-[#252627]/70 max-w-3xl mx-auto">
              Savor exquisite flavors and culinary delights at our world-class restaurants
            </p>
          </div>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#252627] mb-4">Our Restaurants</h2>
            <p className="text-lg text-[#252627]/70">Three unique dining venues to satisfy every craving</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {restaurants.map((restaurant, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className={`h-48 ${restaurant.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[#252627]/20 group-hover:bg-[#252627]/10 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#ec9909] text-white font-semibold">
                      {restaurant.cuisine}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{restaurant.name}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#ec9909] text-[#ec9909]" />
                      ))}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-[#252627]/70 mb-4">{restaurant.description}</p>
                  
                  <div className="space-y-2 text-sm text-[#252627]/70">
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{restaurant.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{restaurant.location}</span>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                    <Phone className="mr-2" size={16} />
                    Make Reservation
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12 bg-gradient-to-br from-[#ffebd6]/30 to-[#f5d5a8]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#252627] mb-4">Our Menu</h2>
            <p className="text-lg text-[#252627]/70">Delicious dishes crafted with the finest ingredients</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {menuSections.map((section, index) => (
              <Card key={index} className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-[#ec9909] to-[#d88708] text-white">
                  <CardTitle className="text-2xl flex items-center justify-between">
                    <div className="flex items-center">
                      <Utensils className="mr-2" size={24} />
                      {section.title}
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      {section.time}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-start border-b border-[#ffebd6] pb-3 last:border-b-0">
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#252627] mb-1">{item.name}</h4>
                          <p className="text-sm text-[#252627]/70">{item.description}</p>
                        </div>
                        <div className="ml-4 text-right">
                          <span className="text-lg font-bold text-[#ec9909]">₱{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Special Offers */}
          <div className="mt-12">
            <Card className="shadow-xl border-0 bg-gradient-to-r from-[#ec9909] to-[#d88708] text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Special Dining Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Romantic Dinner</h4>
                    <p className="text-sm opacity-90 mb-2">3-course meal for two with wine</p>
                    <p className="text-xl font-bold">₱3,500</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Family Feast</h4>
                    <p className="text-sm opacity-90 mb-2">All-you-can-eat buffet for 4</p>
                    <p className="text-xl font-bold">₱4,800</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Sunset Cocktails</h4>
                    <p className="text-sm opacity-90 mb-2">Premium drinks and appetizers</p>
                    <p className="text-xl font-bold">₱2,200</p>
                  </div>
                </div>
                <Button className="mt-6 bg-white text-[#ec9909] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  Book Special Package
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}