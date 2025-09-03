import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show modal after a short delay for better UX
      setTimeout(() => {
        setShowConsent(true);
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('cookie-consent', JSON.stringify({
        accepted: true,
        timestamp: new Date().toISOString()
      }));
      hideModal();
    } catch (error) {
      console.error('Failed to save cookie consent:', error);
      hideModal(); // Still hide modal even if localStorage fails
    }
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('cookie-consent', JSON.stringify({
        accepted: false,
        timestamp: new Date().toISOString()
      }));
      hideModal();
    } catch (error) {
      console.error('Failed to save cookie consent:', error);
      hideModal(); // Still hide modal even if localStorage fails
    }
  };

  const hideModal = () => {
    setIsVisible(false);
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      setShowConsent(false);
    }, 300);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      
      {/* Modal Container */}
      <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-auto">
        <Card 
          className={`w-full max-w-4xl mx-auto border-0 shadow-2xl bg-white transform transition-all duration-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              
              {/* Icon and Title */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="p-2 bg-[#ffebd6] rounded-full">
                  <Cookie className="w-6 h-6 text-[#ec9909]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#252627]">We use cookies</h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <p className="text-[#252627]/80 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                  By clicking "Accept", you consent to our use of cookies. You can learn more about our data practices in our{' '}
                  <Link 
                    to="/privacy-policy" 
                    className="text-[#ec9909] hover:underline font-medium"
                    onClick={hideModal}
                  >
                    Privacy Policy
                  </Link>
                  {' '}and{' '}
                  <Link 
                    to="/cookie-policy" 
                    className="text-[#ec9909] hover:underline font-medium"
                    onClick={hideModal}
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 w-full lg:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDecline}
                  className="border-gray-300 text-gray-600 hover:bg-gray-100 hover:text-gray-700 transition-colors duration-200"
                >
                  Decline
                </Button>
                <Button
                  size="sm"
                  onClick={handleAccept}
                  className="bg-[#ec9909] hover:bg-[#d88708] text-white font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Accept Cookies
                </Button>
              </div>

              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={hideModal}
                className="absolute top-2 right-2 lg:relative lg:top-0 lg:right-0 text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Additional Info for Mobile */}
            <div className="mt-4 pt-4 border-t border-gray-100 lg:hidden">
              <p className="text-xs text-[#252627]/60 text-center">
                DONDEEZCO Beach Resort • Committed to your privacy
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}