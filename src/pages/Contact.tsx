import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#252627] mb-4">
              Contact <span className="text-[#ec9909]">Us</span>
            </h1>
            <p className="text-xl text-[#252627]/70 max-w-3xl mx-auto">
              Get in touch with us for reservations, inquiries, or any assistance you need
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ec9909] to-[#d88708] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#252627] mb-2">Location</h3>
                <p className="text-[#252627]/70 text-sm">
                  Barangay Dumanhug <br />
                  Siquijor Island, Siquijor<br />
                  Philippines
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ec9909] to-[#d88708] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#252627] mb-2">Phone</h3>
                <p className="text-[#252627]/70 text-sm">
                  +63 36 288 1234<br />
                  +63 917 123 4567<br />
                  Toll Free: 1800-DONDEEZ
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ec9909] to-[#d88708] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#252627] mb-2">Email</h3>
                <p className="text-[#252627]/70 text-sm">
                  info@dondeezco.com<br />
                  reservations@dondeezco.com<br />
                  concierge@dondeezco.com
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#ec9909] to-[#d88708] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#252627] mb-2">Hours</h3>
                <p className="text-[#252627]/70 text-sm">
                  Reception: 24/7<br />
                  Concierge: 6AM - 10PM<br />
                  Restaurant: 6AM - 11PM
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-[#252627] flex items-center">
                  <MessageCircle className="mr-2" size={24} />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-[#252627] font-medium">First Name</Label>
                    <Input id="firstName" className="mt-1 border-[#ffebd6] focus:border-[#ec9909]" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-[#252627] font-medium">Last Name</Label>
                    <Input id="lastName" className="mt-1 border-[#ffebd6] focus:border-[#ec9909]" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#252627] font-medium">Email Address</Label>
                  <Input id="email" type="email" className="mt-1 border-[#ffebd6] focus:border-[#ec9909]" />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-[#252627] font-medium">Phone Number</Label>
                  <Input id="phone" type="tel" className="mt-1 border-[#ffebd6] focus:border-[#ec9909]" />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-[#252627] font-medium">Subject</Label>
                  <Input id="subject" className="mt-1 border-[#ffebd6] focus:border-[#ec9909]" />
                </div>

                <div>
                  <Label htmlFor="message" className="text-[#252627] font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    rows={5} 
                    className="mt-1 border-[#ffebd6] focus:border-[#ec9909] resize-none" 
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button className="w-full bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Map and Directions */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#252627]">Location & Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8] rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-16 h-16 text-[#ec9909] mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-[#252627] mb-2">DONDEEZCO Beach Resort</h3>
                        <p className="text-[#252627]/70">Interactive Map Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Directions */}
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#252627]">Getting Here</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#252627] mb-2">From Kalibo Airport (KLO)</h4>
                    <p className="text-[#252627]/70 text-sm">
                      • Take a bus or van to Caticlan Jetty Port (1.5 hours)<br />
                      • Board a boat to Boracay Island (15 minutes)<br />
                      • Take a tricycle to the resort (10 minutes)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#252627] mb-2">From Caticlan Airport (MPH)</h4>
                    <p className="text-[#252627]/70 text-sm">
                      • Take a tricycle to Caticlan Jetty Port (5 minutes)<br />
                      • Board a boat to Boracay Island (15 minutes)<br />
                      • Take a tricycle to the resort (10 minutes)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#252627] mb-2">Airport Transfer Service</h4>
                    <p className="text-[#252627]/70 text-sm mb-3">
                      We offer complimentary airport transfer service for all guests. Please contact us 24 hours before your arrival.
                    </p>
                    <Button className="bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold rounded-full">
                      Book Transfer
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}