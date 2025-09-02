import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import BookingSearch from '@/components/BookingSearch';
import Footer from '@/components/Footer';
import Video from '@/components/Video';
import Testimonials from '@/components/Testimonials';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <BookingSearch />
      <Video />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}