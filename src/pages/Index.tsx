import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Video from '@/components/Video';


export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Video />
      <Features />
      <Footer />
    </div>
  );
}