import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      review: 'Absolutely incredible experience! The ocean view suite was breathtaking, and the staff went above and beyond to make our honeymoon special. The beach is pristine and the food was exceptional.',
      image: 'bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]',
      date: 'March 2024'
    },
    {
      id: 2,
      name: 'Miguel Santos',
      location: 'Manila, Philippines',
      rating: 5,
      review: 'Perfect family vacation! The beach villa was spacious for our family of four. Kids loved the pool and the beach activities. Will definitely come back next year!',
      image: 'bg-gradient-to-br from-[#f5d5a8] to-[#ffebd6]',
      date: 'February 2024'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      location: 'London, UK',
      rating: 5,
      review: 'The most relaxing getaway ever! Beautiful resort, amazing sunset views, and the spa treatments were divine. The dining experience exceeded all expectations.',
      image: 'bg-gradient-to-br from-[#ffebd6] via-[#f5d5a8] to-[#ffebd6]',
      date: 'January 2024'
    },
    {
      id: 4,
      name: 'David Chen',
      location: 'Singapore',
      rating: 5,
      review: 'Outstanding service and facilities! The resort is well-maintained, staff is friendly and professional. The beachfront location is unbeatable. Highly recommended!',
      image: 'bg-gradient-to-br from-[#f5d5a8] to-[#ffebd6]',
      date: 'March 2024'
    },
    {
      id: 5,
      name: 'Lisa Rodriguez',
      location: 'California, USA',
      rating: 5,
      review: 'Paradise found! Every detail was perfect from check-in to check-out. The ocean view from our room was spectacular, and the restaurant served the best seafood I\'ve ever had.',
      image: 'bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]',
      date: 'February 2024'
    },
    {
      id: 6,
      name: 'James Wilson',
      location: 'Sydney, Australia',
      rating: 5,
      review: 'Exceeded all expectations! The resort combines luxury with authentic Filipino hospitality. Perfect for couples seeking romance and relaxation. The sunset dinners were magical.',
      image: 'bg-gradient-to-br from-[#f5d5a8] via-[#ffebd6] to-[#f5d5a8]',
      date: 'January 2024'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-[#ec9909] text-[#ec9909]' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#ffebd6]/20 to-[#f5d5a8]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#252627] mb-4">
            What Our <span className="text-[#ec9909]">Guests</span> Say
          </h2>
          <p className="text-lg text-[#252627]/70 max-w-2xl mx-auto">
            Read testimonials from our satisfied guests who experienced the magic of DONDEEZCO
          </p>
        </div>

        {/* Overall Rating Summary */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <div className="flex items-center space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-[#252627]">4.9</span>
            <span className="text-[#252627]/70">out of 5</span>
            <Badge className="bg-[#ec9909] text-white ml-2">500+ Reviews</Badge>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-[#ec9909] opacity-50" />
                </div>

                {/* Review Text */}
                <p className="text-[#252627]/80 mb-6 leading-relaxed">
                  "{testimonial.review}"
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Guest Info */}
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${testimonial.image} rounded-full flex items-center justify-center`}>
                    <span className="text-[#252627] font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#252627]">{testimonial.name}</h4>
                    <p className="text-sm text-[#252627]/70">{testimonial.location}</p>
                    <p className="text-xs text-[#252627]/50">{testimonial.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#ec9909] to-[#d88708] text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Ready to Create Your Own Story?</h3>
            <p className="mb-4 opacity-90">Join hundreds of satisfied guests and experience paradise</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#ec9909] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
                Book Your Stay
              </button>
              <button className="border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-[#ec9909] transition-all duration-300">
                View All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}