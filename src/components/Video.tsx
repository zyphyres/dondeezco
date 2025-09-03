import { Card, CardContent } from '@/components/ui/card';
import { Waves, Utensils, Wifi, Car, Dumbbell, Heart } from 'lucide-react';

export default function Video() {


  return (
    <section id="video" className="py-20 bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#252627] mb-4">
            Featured <span className="text-[#ec9909]">Video</span>
          </h2>
          <p className="text-xl text-[#252627]/70 max-w-3xl mx-auto">
            Discover the vibrant lifestyle and top-notch amenities that make our community the perfect place to call home.
          </p>
        </div>

        {/* Video Content */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl aspect-w-16 aspect-h-9 shadow-lg rounded-lg overflow-hidden">
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/watch?v=YZynEr4f_Iw"
                title="Community Amenities Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
          </div>
      </div>
    </div>
    </section>
  );

}