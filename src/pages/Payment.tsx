import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, CreditCard, Shield, ArrowLeft, Check } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const roomsData = {
  'ocean-view-suite': { name: 'Ocean View Suite', price: 14950, guests: 2 },
  'beach-villa': { name: 'Beach Villa', price: 29950, guests: 4 },
  'deluxe-room': { name: 'Deluxe Room', price: 9950, guests: 2 },
  'presidential-suite': { name: 'Presidential Suite', price: 49950, guests: 6 },
  'family-room': { name: 'Family Room', price: 19950, guests: 4 },
  'honeymoon-suite': { name: 'Honeymoon Suite', price: 24950, guests: 2 }
};

export default function Payment() {
  const [searchParams] = useSearchParams();
  const roomSlug = searchParams.get('room') || 'ocean-view-suite';
  const room = roomsData[roomSlug as keyof typeof roomsData];
  
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [nights, setNights] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');

  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays > 0 ? diffDays : 1);
    }
  }, [checkIn, checkOut]);

  const subtotal = room.price * nights;
  const tax = subtotal * 0.12; // 12% VAT in Philippines
  const serviceFee = subtotal * 0.05; // 5% service fee
  const total = subtotal + tax + serviceFee;

  const handlePayment = (method: string) => {
    setPaymentMethod(method);
    // Here you would integrate with actual payment processors
    alert(`Payment initiated with ${method}. Total: ₱${total.toLocaleString()}`);
  };

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#ffebd6]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#252627] mb-4">Room Not Found</h1>
          <Link to="/rooms">
            <Button className="bg-[#ec9909] hover:bg-[#d88708] text-white">
              View All Rooms
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffebd6]/30 to-[#f5d5a8]/30">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center mb-8">
            <Link to={`/allrooms`} className="flex items-center text-[#252627] hover:text-[#ec9909] transition-colors duration-300">
              <ArrowLeft size={20} className="mr-2" />
              Back to Rooms
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Booking Form */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#252627]">Booking Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Room Info */}
                  <div className="p-4 bg-[#ffebd6]/50 rounded-lg">
                    <h3 className="text-xl font-bold text-[#252627] mb-2">{room.name}</h3>
                    <div className="flex items-center space-x-4 text-[#252627]/70">
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span>Up to {room.guests} guests</span>
                      </div>
                      <Badge className="bg-[#ec9909] text-white">
                        ₱{room.price.toLocaleString()}/night
                      </Badge>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="checkin" className="text-[#252627] font-medium">Check-in Date</Label>
                      <Input
                        id="checkin"
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="mt-1 border-[#ffebd6] focus:border-[#ec9909]"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkout" className="text-[#252627] font-medium">Check-out Date</Label>
                      <Input
                        id="checkout"
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="mt-1 border-[#ffebd6] focus:border-[#ec9909]"
                        min={checkIn || new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <Label htmlFor="guests" className="text-[#252627] font-medium">Number of Guests</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max={room.guests}
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value))}
                      className="mt-1 border-[#ffebd6] focus:border-[#ec9909]"
                    />
                  </div>

                  {/* Guest Information */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-[#252627]">Guest Information</h4>
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
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Summary & Payment */}
            <div className="space-y-6">
              {/* Booking Summary */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#252627]">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#252627]">{room.name}</span>
                    <span className="font-medium text-[#252627]">₱{room.price.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[#252627]/70">Nights</span>
                    <span className="text-[#252627]">{nights}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[#252627]/70">Guests</span>
                    <span className="text-[#252627]">{guests}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center">
                    <span className="text-[#252627]">Subtotal</span>
                    <span className="text-[#252627]">₱{subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[#252627]/70">Service Fee (5%)</span>
                    <span className="text-[#252627]">₱{serviceFee.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[#252627]/70">VAT (12%)</span>
                    <span className="text-[#252627]">₱{tax.toLocaleString()}</span>
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-[#252627]">Total</span>
                    <span className="text-[#ec9909]">₱{total.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#252627] flex items-center">
                    <Shield className="mr-2" size={24} />
                    Secure Payment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-3">
                    {/* PayPal */}
                    <Button
                      onClick={() => handlePayment('PayPal')}
                      className="w-full h-12 bg-[#0070ba] hover:bg-[#005ea6] text-white font-semibold rounded-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-lg font-bold">PayPal</span>
                      </div>
                    </Button>

                    {/* GCash */}
                    <Button
                      onClick={() => handlePayment('GCash')}
                      className="w-full h-12 bg-[#007dff] hover:bg-[#0066cc] text-white font-semibold rounded-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-lg font-bold">GCash</span>
                      </div>
                    </Button>

                    {/* Credit Card */}
                    <Button
                      onClick={() => handlePayment('Credit Card')}
                      className="w-full h-12 bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold rounded-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <CreditCard size={20} />
                        <span>Credit/Debit Card</span>
                      </div>
                    </Button>

                    {/* Bank Transfer */}
                    <Button
                      onClick={() => handlePayment('Bank Transfer')}
                      variant="outline"
                      className="w-full h-12 border-2 border-[#ec9909] text-[#ec9909] hover:bg-[#ec9909] hover:text-white font-semibold rounded-lg transition-all duration-300"
                    >
                      Bank Transfer
                    </Button>
                  </div>

                  <div className="text-xs text-[#252627]/60 text-center mt-4">
                    <Shield size={16} className="inline mr-1" />
                    Your payment information is secure and encrypted
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}