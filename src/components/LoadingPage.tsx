import { useState, useEffect } from 'react';
import { Waves, Sun, Palmtree } from 'lucide-react';

interface LoadingPageProps {
  onLoadingComplete: () => void;
}

export default function LoadingPage({ onLoadingComplete }: LoadingPageProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    'Preparing your paradise...',
    'Loading resort amenities...',
    'Setting up your experience...',
    'Almost ready...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        // Update current step based on progress
        if (newProgress > 25 && currentStep < 1) setCurrentStep(1);
        else if (newProgress > 50 && currentStep < 2) setCurrentStep(2);
        else if (newProgress > 75 && currentStep < 3) setCurrentStep(3);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [currentStep, onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]">
      <div className="text-center space-y-8 max-w-md mx-auto px-6">
        
        {/* Logo/Brand Section */}
        <div className="space-y-4">
          <div className="relative">
            {/* Animated Icons */}
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="animate-bounce delay-0">
                <Sun className="w-8 h-8 text-[#ec9909]" />
              </div>
              <div className="animate-bounce delay-150">
                <Waves className="w-12 h-12 text-[#ec9909]" />
              </div>
              <div className="animate-bounce delay-300">
                <Palmtree className="w-8 h-8 text-[#ec9909]" />
              </div>
            </div>
            
            {/* Resort Name */}
            <h1 className="text-4xl font-bold text-[#252627] mb-2">
              DONDEEZCO
            </h1>
            <p className="text-lg text-[#252627]/80 font-medium">
              Beach Resort
            </p>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="space-y-6">
          {/* Circular Progress */}
          <div className="relative w-24 h-24 mx-auto">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="rgba(37, 38, 39, 0.1)"
                strokeWidth="8"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#ec9909"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
                className="transition-all duration-300 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-[#252627]">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-xs mx-auto">
            <div className="h-2 bg-[#252627]/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#ec9909] to-[#d88708] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Loading Text */}
          <div className="space-y-2">
            <p className="text-[#252627] font-medium animate-pulse">
              {loadingSteps[currentStep]}
            </p>
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-[#ec9909] rounded-full animate-bounce delay-0"></div>
              <div className="w-2 h-2 bg-[#ec9909] rounded-full animate-bounce delay-150"></div>
              <div className="w-2 h-2 bg-[#ec9909] rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="pt-4">
          <p className="text-[#252627]/70 text-sm italic">
            "Where paradise meets luxury"
          </p>
        </div>
      </div>
    </div>
  );
}