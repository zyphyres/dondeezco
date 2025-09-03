import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Heart, Leaf, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const stats = [
    { number: '15+', label: 'Years of Excellence', icon: <Award className="w-6 h-6" /> },
    { number: '50,000+', label: 'Happy Guests', icon: <Users className="w-6 h-6" /> },
    { number: '4.9/5', label: 'Guest Rating', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Guest Service', icon: <Heart className="w-6 h-6" /> }
  ];

  const team = [
    {
      name: 'Maria Santos',
      position: 'General Manager',
      experience: '12 years',
      image: 'bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]',
      description: 'Leading hospitality professional with expertise in luxury resort management.'
    },
    {
      name: 'Chef Antonio Cruz',
      position: 'Executive Chef',
      experience: '15 years',
      image: 'bg-gradient-to-br from-[#f5d5a8] to-[#ffebd6]',
      description: 'Award-winning chef specializing in Filipino and international cuisine.'
    },
    {
      name: 'Isabella Rodriguez',
      position: 'Guest Relations Manager',
      experience: '8 years',
      image: 'bg-gradient-to-br from-[#ffebd6] via-[#f5d5a8] to-[#ffebd6]',
      description: 'Dedicated to creating exceptional guest experiences and memorable stays.'
    },
    {
      name: 'Captain Miguel Torres',
      position: 'Activities Director',
      experience: '10 years',
      image: 'bg-gradient-to-br from-[#f5d5a8] via-[#ffebd6] to-[#f5d5a8]',
      description: 'Marine expert and adventure specialist ensuring safe and exciting excursions.'
    }
  ];

  const facilities = [
    {
      name: 'Longest Shoreline Beach',
      description: '500 meters of pristine white sand beach',
      icon: <MapPin className="w-6 h-6" />
    },
    {
      name: 'Spa & Wellness Center',
      description: 'Full-service spa with traditional treatments',
      icon: <Heart className="w-6 h-6" />
    },
    {
      name: 'Fine Dining Restaurant',
      description: 'Award-winning cuisine with ocean views',
      icon: <Star className="w-6 h-6" />
    },
    {
      name: 'Water Sports Center',
      description: 'Complete equipment for all water activities',
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#252627] mb-6">
              About <span className="text-[#ec9909]">DONDEEZCO</span>
            </h1>
            <p className="text-xl text-[#252627]/80 max-w-3xl mx-auto">
              A legacy of hospitality excellence in the heart of paradise
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <div className="flex justify-center mb-3 text-[#ec9909]">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-[#252627] mb-1">{stat.number}</div>
                <div className="text-sm text-[#252627]/70">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#252627] mb-6">Our Story</h2>
              <div className="space-y-4 text-[#252627]/80">
                <p>
                  Founded in 1985, DONDEEZCO Beach Resort began as a dream to create the perfect tropical getaway. 
                  What started as a beachfront property has grown into one of the longest shoreline beach in Siquijor Island, Philippines' most beloved 
                  resorts, welcoming guests from around the world.
                </p>
                <p>
                  Our commitment to exceptional service, sustainable tourism, and authentic Filipino hospitality 
                  has earned us numerous awards and the loyalty of thousands of guests who return year after year.
                </p>
                <p>
                  Today, we continue to evolve while staying true to our core values: providing unforgettable 
                  experiences in harmony with nature and local culture.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8] rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center text-[#252627]">
                <Award className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold">Award-Winning Resort</h3>
                <p className="text-sm opacity-70">Excellence in Hospitality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gradient-to-br from-[#ffebd6]/20 to-[#f5d5a8]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#252627] mb-4">Our Mission & Values</h2>
            <p className="text-lg text-[#252627]/70 max-w-2xl mx-auto">
              Guided by our commitment to excellence, sustainability, and authentic hospitality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <div className="flex justify-center mb-4 text-[#ec9909]">
                <Heart className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-[#252627] mb-4">Exceptional Service</h3>
              <p className="text-[#252627]/70">
                We go above and beyond to create memorable experiences that exceed our guests' expectations.
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <div className="flex justify-center mb-4 text-[#ec9909]">
                <Leaf className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-[#252627] mb-4">Sustainability</h3>
              <p className="text-[#252627]/70">
                Committed to protecting our beautiful environment for future generations to enjoy.
              </p>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <div className="flex justify-center mb-4 text-[#ec9909]">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-[#252627] mb-4">Community</h3>
              <p className="text-[#252627]/70">
                Supporting local communities and sharing the rich culture of the Philippines.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#252627] mb-4">Meet Our Team</h2>
            <p className="text-lg text-[#252627]/70 max-w-2xl mx-auto">
              The passionate professionals who make your stay extraordinary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`h-48 ${member.image} flex items-center justify-center`}>
                  <div className="text-[#252627] text-4xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#252627] mb-1">{member.name}</h3>
                  <p className="text-[#ec9909] font-semibold mb-2">{member.position}</p>
                  <Badge variant="secondary" className="bg-[#ffebd6] text-[#252627] mb-3">
                    {member.experience}
                  </Badge>
                  <p className="text-sm text-[#252627]/70">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gradient-to-br from-[#ffebd6]/20 to-[#f5d5a8]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#252627] mb-4">World-Class Facilities</h2>
            <p className="text-lg text-[#252627]/70 max-w-2xl mx-auto">
              Everything you need for the perfect tropical getaway
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-[#ec9909]">
                    {facility.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#252627] mb-2">{facility.name}</h3>
                    <p className="text-[#252627]/70">{facility.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#ec9909] to-[#d88708]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Experience DONDEEZCO</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join our family of satisfied guests and discover why DONDEEZCO is the perfect choice for your next vacation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rooms">
            <button className="bg-white text-[#ec9909] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
              Book Your Stay
            </button>
            </Link>
            <Link to="/contact">
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-[#ec9909] transition-all duration-300">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}