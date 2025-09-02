import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronLeft, ChevronRight, Users, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface DateRange {
  start: Date | null;
  end: Date | null;
}

interface Room {
  id: number;
  name: string;
  slug: string;
  price: number;
  availability: string;
  image: string;
  features: string[];
  maxGuests: number;
}

export default function BookingSearch() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [dateRange, setDateRange] = useState<DateRange>({ start: null, end: null });
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('any');
  const [availableRooms, setAvailableRooms] = useState<Room[]>([]);
  const [showResults, setShowResults] = useState(false);

  const rooms: Room[] = [
    {
      id: 1,
      name: 'Shoreline Room No.1',
      slug: 'shoreline-room-no-1',
      price: 3600,
      availability: 'Available',
      image: `bg-[url('/shoreline/1.jpg')] bg-cover bg-center`,
      features: ['Ocean View', 'Free Breakfast', 'WiFi', 'Parking'],
      maxGuests: 2
    },
    {
      id: 2,
      name: 'Deluxe Room No.3',
      slug: 'deluxe-room-no-3',
      price: 3400,
      availability: 'Available',
      image: `bg-[url('/deluxe/6.jpg')] bg-cover bg-center`,
      features:  ['Kitchenette', 'WiFi', 'Coffee', 'AC'],
      maxGuests: 2
    },
    {
      id: 3,
      name: 'Family Room No.3',
      slug: 'family-room-no-3',
      price: 6600,
      availability: 'Available',
      image: `bg-[url('/family/3.jpg')] bg-cover bg-center`,
      features: ['Parking', 'Pool', 'Kitchen', 'Beach Access'],
      maxGuests: 6
    },
    {
      id: 4,
      name:'Shoreline Room No.3',
      slug: 'shoreline-room-no-3',
      price: 3600,
      availability: 'Available',
      image: `bg-[url('/shoreline/3.jpg')] bg-cover bg-center`,
      features: ['Ocean View', 'Free Breakfast', 'WiFi', 'Parking'],
      maxGuests: 2
    },
    {
      id: 5,
      name: 'Deluxe Room No.1',
      slug: 'deluxe-room-no-1',
      price: 3400,
      availability: 'Available',
      image: `bg-[url('/deluxe/1.jpg')] bg-cover bg-center`,
      features:  ['Kitchenette', 'WiFi', 'Coffee', 'AC'],
      maxGuests: 2
    }
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isDateInRange = (date: Date) => {
    if (!dateRange.start || !dateRange.end) return false;
    return date >= dateRange.start && date <= dateRange.end;
  };

  const isDateSelected = (date: Date) => {
    if (!dateRange.start) return false;
    if (!dateRange.end) return date.toDateString() === dateRange.start.toDateString();
    return date.toDateString() === dateRange.start.toDateString() || 
           date.toDateString() === dateRange.end.toDateString();
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleDateClick = (date: Date) => {
    if (isPastDate(date)) return;

    if (!dateRange.start || (dateRange.start && dateRange.end)) {
      // Start new selection
      setDateRange({ start: date, end: null });
      setShowResults(false);
    } else if (dateRange.start && !dateRange.end) {
      // Complete the range
      if (date < dateRange.start) {
        setDateRange({ start: date, end: dateRange.start });
      } else {
        setDateRange({ start: dateRange.start, end: date });
      }
      // Auto-search when range is complete
      setTimeout(() => searchRooms(dateRange.start, date), 100);
    }
  };

  const searchRooms = (start: Date | null, end: Date | null) => {
    if (!start || !end) return;

    const guestCount = parseInt(guests);
    let filteredRooms = rooms.filter(room => room.maxGuests >= guestCount);

    if (roomType !== 'any') {
      filteredRooms = filteredRooms.filter(room => 
        room.name.toLowerCase().includes(roomType.toLowerCase())
      );
    }

    setAvailableRooms(filteredRooms);
    setShowResults(true);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const formatDateRange = () => {
    if (!dateRange.start) return 'Select dates';
    if (!dateRange.end) return dateRange.start.toLocaleDateString();
    return `${dateRange.start.toLocaleDateString()} - ${dateRange.end.toLocaleDateString()}`;
  };

  const calculateNights = () => {
    if (!dateRange.start || !dateRange.end) return 0;
    const diffTime = Math.abs(dateRange.end.getTime() - dateRange.start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isInRange = isDateInRange(date);
      const isSelected = isDateSelected(date);
      const isPast = isPastDate(date);

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(date)}
          disabled={isPast}
          className={`
            h-10 w-10 rounded-lg text-sm font-medium transition-all duration-200
            ${isPast 
              ? 'text-gray-300 cursor-not-allowed' 
              : 'hover:bg-[#ec9909] hover:text-white cursor-pointer'
            }
            ${isSelected 
              ? 'bg-[#ec9909] text-white shadow-lg' 
              : isInRange 
                ? 'bg-[#ffebd6] text-[#252627]' 
                : 'text-[#252627] hover:bg-[#ec9909]/10'
            }
          `}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#252627] mb-2">
            Find Your Perfect <span className="text-[#ec9909]">Stay</span>
          </h2>
          <p className="text-[#252627]/70">Select your dates and discover available rooms</p>
        </div>

        {/* Main Search Card */}
        <Card className="shadow-2xl border-0 bg-gradient-to-r from-[#ffebd6] to-[#f5d5a8] max-w-6xl mx-auto">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Custom Calendar */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-[#252627]">Select Dates</h3>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => navigateMonth('prev')}
                        className="p-2 rounded-lg hover:bg-[#ffebd6] transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-[#252627]" />
                      </button>
                      <span className="text-lg font-semibold text-[#252627] min-w-[140px] text-center">
                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                      </span>
                      <button
                        onClick={() => navigateMonth('next')}
                        className="p-2 rounded-lg hover:bg-[#ffebd6] transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-[#252627]" />
                      </button>
                    </div>
                  </div>

                  {/* Day Labels */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="h-10 flex items-center justify-center text-sm font-medium text-[#252627]/70">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {renderCalendar()}
                  </div>

                  {/* Selected Date Range Display */}
                  <div className="mt-6 p-4 bg-[#ffebd6] rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-[#ec9909]" />
                        <span className="font-medium text-[#252627]">{formatDateRange()}</span>
                      </div>
                      {calculateNights() > 0 && (
                        <span className="text-sm text-[#252627]/70">
                          {calculateNights()} night{calculateNights() !== 1 ? 's' : ''}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-[#252627] mb-4">Booking Details</h3>
                  
                  {/* Guests */}
                  <div className="space-y-2 mb-4">
                    <label className="text-[#252627] font-semibold flex items-center">
                      <Users className="mr-2" size={16} />
                      Guests
                    </label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger className="bg-white border-[#ec9909]/30 focus:border-[#ec9909]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Room Type */}
                  <div className="space-y-2 mb-6">
                    <label className="text-[#252627] font-semibold flex items-center">
                      <MapPin className="mr-2" size={16} />
                      Room Type
                    </label>
                    <Select value={roomType} onValueChange={setRoomType}>
                      <SelectTrigger className="bg-white border-[#ec9909]/30 focus:border-[#ec9909]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Room</SelectItem>
                        <SelectItem value="shoreline room">Shoreline Room</SelectItem>
                        <SelectItem value="family room">Family Room</SelectItem>
                        <SelectItem value="deluxe room">Deluxe Room</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Manual Search Button */}
                  <Button 
                    onClick={() => searchRooms(dateRange.start, dateRange.end)}
                    disabled={!dateRange.start || !dateRange.end}
                    className="w-full bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Search Rooms
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        {showResults && availableRooms.length > 0 && (
          <div className="mt-12 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-[#252627] mb-6 text-center">
              Available Rooms ({calculateNights()} night{calculateNights() !== 1 ? 's' : ''})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableRooms.map((room) => (
                <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                  <div className={`h-40 ${room.image} relative`}>
                    <div className="absolute top-3 right-3">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {room.availability}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                        Up to {room.maxGuests} guests
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="font-bold text-[#252627] text-lg mb-2">{room.name}</h4>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {room.features.slice(0, 3).map((feature, index) => (
                        <span key={index} className="bg-[#ffebd6] text-[#252627] px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-2xl font-bold text-[#ec9909]">₱{room.price.toLocaleString()}</p>
                        <p className="text-xs text-[#252627]/70">per night</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-[#252627]">
                          ₱{(room.price * calculateNights()).toLocaleString()}
                        </p>
                        <p className="text-xs text-[#252627]/70">total</p>
                      </div>
                    </div>
                    
                    <Link to={`/room/${room.slug}`} className="flex-1">
                    <Button className="w-full bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold transition-all duration-300 transform hover:scale-105">
                      Book Now
                    </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {showResults && availableRooms.length === 0 && (
          <div className="mt-12 text-center">
            <div className="bg-gray-100 rounded-xl p-8 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-[#252627] mb-2">No rooms available</h3>
              <p className="text-[#252627]/70">Try adjusting your dates or guest count</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}