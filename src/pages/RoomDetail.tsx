import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Users,
  Bed,
  Bath,
  Wifi,
  Coffee,
  Car,
  Waves,
  Utensils,
  Dumbbell,
  Heart,
  Calendar,
  Star,
  MapPin,
  Maximize,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const roomsData = {
  "shoreline-room-no-1": {
    id: 1,
    name: "Shoreline Room No.1",
    price: 3600,
    size: "45 sqm",
    guests: 2,
    beds: "1 King Bed",
    baths: 1,
    images: [
      `bg-[url('/shoreline/1.jpg')] bg-cover bg-center`,
      `bg-[url('/shoreline/2.jpg')] bg-cover bg-center`,
      `bg-[url('/shoreline/3.jpg')] bg-cover bg-center`,
      `bg-[url('/shoreline/4.jpg')] bg-cover bg-center`
    ],
    description:
      "Indulge in luxury with our Ocean View Suite, featuring panoramic views of the crystal-clear waters and pristine beaches. This elegantly appointed suite offers a perfect blend of comfort and sophistication, with a private balcony where you can enjoy breathtaking sunrises and sunsets.",
    features: [
      "Panoramic Ocean Views",
      "Private Balcony",
      "King Size Bed",
      "Marble Bathroom",
      "Mini Bar",
      "High-Speed WiFi",
      "24/7 Room Service",
      "Air Conditioning",
      "Safe Deposit Box",
      "Flat Screen TV",
    ],
    amenities: [
      { icon: Waves, name: "Ocean View" },
      { icon: Wifi, name: "Free WiFi" },
      { icon: Coffee, name: "Mini Bar" },
      { icon: Car, name: "Valet Parking" },
    ],
  },
  "family-room-no-1": {
    id: 2,
    name: "Family Room No.1",
    price: 6600,
    size: "120 sqm",
    guests: 4,
    beds: "2 King Beds",
    baths: 2,
    images: [
      `bg-[url('/family/1.jpg')] bg-cover bg-center`,
      `bg-[url('/family/2.jpg')] bg-cover bg-center`,
      `bg-[url('/family/3.jpg')] bg-cover bg-center`,
      `bg-[url('/family/4.jpg')] bg-cover bg-center`
    ],
    description:
      "Experience ultimate luxury in our exclusive Beach Villa with direct beach access and private pool. This spacious villa features two bedrooms, a fully equipped kitchen, and a private garden, making it perfect for families or couples seeking privacy and exclusivity.",
    features: [
      "Direct Beach Access",
      "Private Swimming Pool",
      "Full Kitchen",
      "Private Garden",
      "Two Bedrooms",
      "Living Room",
      "Dining Area",
      "BBQ Facilities",
      "Outdoor Shower",
      "Beach Chairs & Umbrellas",
    ],
    amenities: [
      { icon: Waves, name: "Private Beach" },
      { icon: Utensils, name: "Full Kitchen" },
      { icon: Heart, name: "Private Pool" },
      { icon: Wifi, name: "Free WiFi" },
    ],
  },
  "deluxe-room-no-1": {
    id: 3,
    name: "Deluxe Room No.1",
    price: 3400,
    size: "35 sqm",
    guests: 2,
    beds: "1 Queen Bed",
    baths: 1,
    images: [
      `bg-[url('/deluxe/1.jpg')] bg-cover bg-center`,
      `bg-[url('/deluxe/2.jpg')] bg-cover bg-center`,
      `bg-[url('/deluxe/3.jpg')] bg-cover bg-center`,
      `bg-[url('/deluxe/4.jpg')] bg-cover bg-center`
    ],
    description:
      "Our Deluxe Room offers comfort and elegance with beautiful garden views. Thoughtfully designed with modern amenities and warm tropical decor, this room provides a peaceful retreat after a day of beach activities and resort exploration.",
    features: [
      "Garden Views",
      "Queen Size Bed",
      "Modern Bathroom",
      "Work Desk",
      "Coffee/Tea Maker",
      "High-Speed WiFi",
      "Air Conditioning",
      "Safe Deposit Box",
      "Flat Screen TV",
      "Daily Housekeeping",
    ],
    amenities: [
      { icon: Coffee, name: "Coffee Maker" },
      { icon: Wifi, name: "Free WiFi" },
      { icon: Dumbbell, name: "Gym Access" },
      { icon: Car, name: "Valet Parking" },
    ],
  },
  "shoreline-room-no-2": {
    id: 4,
    name: "Shoreline Room No.2",
    price: 3600,
    size: "45 sqm",
    guests: 2,
    beds: "1 King Bed",
    baths: 1,
    images: [
      `bg-[url('/shoreline/5.jpg')] bg-cover bg-center`,
      `bg-[url('/shoreline/6.jpg')] bg-cover bg-center`,
      `bg-[url('/shoreline/7.jpg')] bg-cover bg-center`,
      `bg-[url('/shoreline/8.jpg')] bg-cover bg-center`
    ],
    description:
      "Indulge in luxury with our Ocean View Suite, featuring panoramic views of the crystal-clear waters and pristine beaches. This elegantly appointed suite offers a perfect blend of comfort and sophistication, with a private balcony where you can enjoy breathtaking sunrises and sunsets.",
    features: [
      "Panoramic Ocean Views",
      "Private Balcony",
      "King Size Bed",
      "Marble Bathroom",
      "Mini Bar",
      "High-Speed WiFi",
      "24/7 Room Service",
      "Air Conditioning",
      "Safe Deposit Box",
      "Flat Screen TV",
    ],
    amenities: [
      { icon: Waves, name: "Ocean View" },
      { icon: Wifi, name: "Free WiFi" },
      { icon: Coffee, name: "Mini Bar" },
      { icon: Car, name: "Valet Parking" },
    ],
  },
    "family-room-no-2": {
    id: 5,
    name: "Family Room No.2",
    price: 6600,
    size: "120 sqm",
    guests: 4,
    beds: "2 King Beds",
    baths: 2,
    images: [
      `bg-[url('/family/5.jpg')] bg-cover bg-center`,
      `bg-[url('/family/2.jpg')] bg-cover bg-center`,
      `bg-[url('/family/3.jpg')] bg-cover bg-center`,
      `bg-[url('/family/4.jpg')] bg-cover bg-center`
    ],
    description:
      "Experience ultimate luxury in our exclusive Beach Villa with direct beach access and private pool. This spacious villa features two bedrooms, a fully equipped kitchen, and a private garden, making it perfect for families or couples seeking privacy and exclusivity.",
    features: [
      "Direct Beach Access",
      "Private Swimming Pool",
      "Full Kitchen",
      "Private Garden",
      "Two Bedrooms",
      "Living Room",
      "Dining Area",
      "BBQ Facilities",
      "Outdoor Shower",
      "Beach Chairs & Umbrellas",
    ],
    amenities: [
      { icon: Waves, name: "Private Beach" },
      { icon: Utensils, name: "Full Kitchen" },
      { icon: Heart, name: "Private Pool" },
      { icon: Wifi, name: "Free WiFi" },
    ],
  },
  "deluxe-room-no-2": {
    id: 6,
    name: "Deluxe Room No.2",
    price: 3400,
    size: "35 sqm",
    guests: 2,
    beds: "1 Queen Bed",
    baths: 1,
    images: [
      `bg-[url('/deluxe/5.jpg')] bg-cover bg-center`,
      `bg-[url('/deluxe/2.jpg')] bg-cover bg-center`,
      `bg-[url('/deluxe/3.jpg')] bg-cover bg-center`,
      `bg-[url('/deluxe/1.jpg')] bg-cover bg-center`
    ],
    description:
      "Our Deluxe Room offers comfort and elegance with beautiful garden views. Thoughtfully designed with modern amenities and warm tropical decor, this room provides a peaceful retreat after a day of beach activities and resort exploration.",
    features: [
      "Garden Views",
      "Queen Size Bed",
      "Modern Bathroom",
      "Work Desk",
      "Coffee/Tea Maker",
      "High-Speed WiFi",
      "Air Conditioning",
      "Safe Deposit Box",
      "Flat Screen TV",
      "Daily Housekeeping",
    ],
    amenities: [
      { icon: Coffee, name: "Coffee Maker" },
      { icon: Wifi, name: "Free WiFi" },
      { icon: Dumbbell, name: "Gym Access" },
      { icon: Car, name: "Valet Parking" },
    ],
  },
  "shoreline-room-no-3": { 
    id: 7,
    name: "Shoreline Room No.3",
    price: 3600,
    size: "45 sqm",
    guests: 2,
    beds: "1 King Bed",
    baths: 1,
    images: [
      `bg-[url('/shoreline/1.jpg')] bg-cover bg-center`,
      `bg-[url('/shoreline/2.jpg')] bg-cover bg-center`,
      `bg-[url('/shoreline/3.jpg')] bg-cover bg-center`,
      `bg-[url('/shoreline/4.jpg')] bg-cover bg-center`
    ],
    description:
      "Indulge in luxury with our Ocean View Suite, featuring panoramic views of the crystal-clear waters and pristine beaches. This elegantly appointed suite offers a perfect blend of comfort and sophistication, with a private balcony where you can enjoy breathtaking sunrises and sunsets.",
    features: [
      "Panoramic Ocean Views",
      "Private Balcony",
      "King Size Bed",
      "Marble Bathroom",
      "Mini Bar",
      "High-Speed WiFi",
      "24/7 Room Service",
      "Air Conditioning",
      "Safe Deposit Box",
      "Flat Screen TV",
    ],
    amenities: [
      { icon: Waves, name: "Ocean View" },
      { icon: Wifi, name: "Free WiFi" },
      { icon: Coffee, name: "Mini Bar" },
      { icon: Car, name: "Valet Parking" },
    ],
  },
    "family-room-no-3": {
    id: 8,
    name: "Family Room No.3",
    price: 6600,
    size: "120 sqm",
    guests: 4,
    beds: "2 King Beds",
    baths: 2,
    images: [
      `bg-[url('/family/1.jpg')] bg-cover bg-center`,
      `bg-[url('/family/2.jpg')] bg-cover bg-center`,
      `bg-[url('/family/3.jpg')] bg-cover bg-center`,
      `bg-[url('/family/4.jpg')] bg-cover bg-center`
    ],
    description:
      "Experience ultimate luxury in our exclusive Beach Villa with direct beach access and private pool. This spacious villa features two bedrooms, a fully equipped kitchen, and a private garden, making it perfect for families or couples seeking privacy and exclusivity.",
    features: [
      "Direct Beach Access",
      "Private Swimming Pool",
      "Full Kitchen",
      "Private Garden",
      "Two Bedrooms",
      "Living Room",
      "Dining Area",
      "BBQ Facilities",
      "Outdoor Shower",
      "Beach Chairs & Umbrellas",
    ],
    amenities: [
      { icon: Waves, name: "Private Beach" },
      { icon: Utensils, name: "Full Kitchen" },
      { icon: Heart, name: "Private Pool" },
      { icon: Wifi, name: "Free WiFi" },
    ],
  },
  "deluxe-room-no-3": {
    id: 9,
    name: "Deluxe Room No.3",
    price: 3400,
    size: "35 sqm",
    guests: 2,
    beds: "1 Queen Bed",
    baths: 1,
    images: [
      `bg-[url('/deluxe/1.jpg')] bg-cover bg-center`,
      `bg-[url('/deluxe/2.jpg')] bg-cover bg-center`,
      `bg-[url('/deluxe/3.jpg')] bg-cover bg-center`,
      `bg-[url('/deluxe/4.jpg')] bg-cover bg-center`
    ],
    description:
      "Our Deluxe Room offers comfort and elegance with beautiful garden views. Thoughtfully designed with modern amenities and warm tropical decor, this room provides a peaceful retreat after a day of beach activities and resort exploration.",
    features: [
      "Garden Views",
      "Queen Size Bed",
      "Modern Bathroom",
      "Work Desk",
      "Coffee/Tea Maker",
      "High-Speed WiFi",
      "Air Conditioning",
      "Safe Deposit Box",
      "Flat Screen TV",
      "Daily Housekeeping",
    ],
    amenities: [
      { icon: Coffee, name: "Coffee Maker" },
      { icon: Wifi, name: "Free WiFi" },
      { icon: Dumbbell, name: "Gym Access" },
      { icon: Car, name: "Valet Parking" },
    ],
  },
};

export default function RoomDetail() {
  const { roomId } = useParams();
  const room = roomsData[roomId as keyof typeof roomsData];

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#ffebd6]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#252627] mb-4">
            Room Not Found
          </h1>
          <Link to="/">
            <Button className="bg-[#ec9909] hover:bg-[#d88708] text-white">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link
              to="/allrooms"
              className="flex items-center text-[#252627] hover:text-[#ec9909] transition-colors duration-300"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Rooms
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#252627] mb-4">
                {room.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 fill-[#ec9909] text-[#ec9909]" />
                  <Star className="w-5 h-5 fill-[#ec9909] text-[#ec9909]" />
                  <Star className="w-5 h-5 fill-[#ec9909] text-[#ec9909]" />
                  <Star className="w-5 h-5 fill-[#ec9909] text-[#ec9909]" />
                  <Star className="w-5 h-5 fill-[#ec9909] text-[#ec9909]" />
                </div>
                <span className="text-[#252627]/70">5.0 (124 reviews)</span>
              </div>
              <p className="text-xl text-[#252627]/80 mb-6 leading-relaxed">
                {room.description}
              </p>
              <div className="flex items-center space-x-6 text-[#252627]/70">
                <div className="flex items-center space-x-2">
                  <Users size={20} />
                  <span>{room.guests} Guests</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bed size={20} />
                  <span>{room.beds}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bath size={20} />
                  <span>{room.baths} Bath</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Maximize size={20} />
                  <span>{room.size}</span>
                </div>
              </div>
            </div>

            <div className="lg:text-right">
              <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-[#252627] mb-2">
                  ₱{room.price}
                  <span className="text-lg font-normal text-[#252627]/70">
                    /night
                  </span>
                </div>
                <Link to={`/payment?room=${roomId}`}>
                  <Button
                    size="lg"
                    className="bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    <Calendar className="mr-2" size={20} />
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#252627] mb-8">
            Room Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {room.images.map((image, index) => (
              <div
                key={index}
                className={`h-64 ${image} rounded-lg relative overflow-hidden group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-[#252627]/10 group-hover:bg-[#252627]/5 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-3">
                    <Maximize size={24} className="text-[#252627]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Details */}
      <section className="py-12 bg-gradient-to-br from-[#ffebd6]/30 to-[#f5d5a8]/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-[#252627] mb-6">
                Room Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {room.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white/80 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-[#ec9909] rounded-full"></div>
                    <span className="text-[#252627]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-2xl font-bold text-[#252627] mb-6">
                Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {room.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white/80 rounded-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ec9909] to-[#d88708] rounded-full flex items-center justify-center">
                      <amenity.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[#252627] font-medium">
                      {amenity.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto shadow-2xl border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-[#252627] mb-4">
                  Ready to Book?
                </h3>
                <p className="text-xl text-[#252627]/70">
                  Experience luxury and comfort at DONDEEZCO Beach Resort
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-[#ffebd6]/30 rounded-lg">
                  <div className="text-2xl font-bold text-[#252627] mb-2">
                    ₱{room.price}
                  </div>
                  <div className="text-[#252627]/70">per night</div>
                </div>
                <div className="text-center p-4 bg-[#ffebd6]/30 rounded-lg">
                  <div className="text-2xl font-bold text-[#252627] mb-2">
                    {room.guests}
                  </div>
                  <div className="text-[#252627]/70">max guests</div>
                </div>
                <div className="text-center p-4 bg-[#ffebd6]/30 rounded-lg">
                  <div className="text-2xl font-bold text-[#252627] mb-2">
                    {room.size}
                  </div>
                  <div className="text-[#252627]/70">room size</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={`/payment?room=${roomId}`}>
                  <Button
                    size="lg"
                    className="bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105" style={{ paddingLeft: "5.5rem"
  ,paddingRight: "5.8rem" }}
                  >
                    <Calendar className="mr-2" size={20} />
                    Book This Room
                  </Button>
                </Link>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#ec9909] text-[#ec9909] hover:bg-[#ec9909] hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Check Availability
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
