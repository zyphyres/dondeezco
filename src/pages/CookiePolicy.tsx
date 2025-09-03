import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#252627] mb-6">
            Cookie <span className="text-[#ec9909]">Policy</span>
          </h1>
          <p className="text-xl text-[#252627]/80 max-w-3xl mx-auto">
            Learn about how we use cookies and similar technologies to enhance your experience
          </p>
          <p className="text-sm text-[#252627]/60 mt-4">
            Last updated: March 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">1. What Are Cookies?</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>1.1 Definition:</strong> Cookies are small text files that are placed on your device when you visit our website.</p>
                  <p><strong>1.2 Purpose:</strong> They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.</p>
                  <p><strong>1.3 Storage:</strong> Cookies are stored locally on your device and can be accessed by our website when you return.</p>
                  <p><strong>1.4 Expiration:</strong> Cookies can be temporary (session cookies) or persistent (stored for a specific period).</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">2. Types of Cookies We Use</h2>
                <div className="space-y-6 text-[#252627]/80 leading-relaxed">
                  
                  <div className="bg-[#ffebd6] p-4 rounded-lg">
                    <h3 className="font-bold text-[#252627] mb-2">Essential Cookies</h3>
                    <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions.</p>
                    <p className="text-sm mt-2"><strong>Examples:</strong> Session management, security tokens, load balancing</p>
                  </div>

                  <div className="bg-[#f5d5a8] p-4 rounded-lg">
                    <h3 className="font-bold text-[#252627] mb-2">Analytics Cookies</h3>
                    <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                    <p className="text-sm mt-2"><strong>Examples:</strong> Google Analytics, page views, bounce rate, traffic sources</p>
                  </div>

                  <div className="bg-[#ffebd6] p-4 rounded-lg">
                    <h3 className="font-bold text-[#252627] mb-2">Functional Cookies</h3>
                    <p>These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.</p>
                    <p className="text-sm mt-2"><strong>Examples:</strong> Language preferences, currency selection, user interface customization</p>
                  </div>

                  <div className="bg-[#f5d5a8] p-4 rounded-lg">
                    <h3 className="font-bold text-[#252627] mb-2">Marketing Cookies</h3>
                    <p>These cookies are used to deliver personalized advertisements and track the effectiveness of our marketing campaigns.</p>
                    <p className="text-sm mt-2"><strong>Examples:</strong> Ad targeting, conversion tracking, social media integration</p>
                  </div>

                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">3. Managing Your Cookie Preferences</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>3.1 Browser Settings:</strong> You can control cookies through your browser settings. Most browsers allow you to block or delete cookies.</p>
                  <p><strong>3.2 Cookie Consent:</strong> When you first visit our website, you can choose which types of cookies to accept.</p>
                  <p><strong>3.3 Opt-out Tools:</strong> You can use industry opt-out tools to prevent certain types of tracking.</p>
                  <p><strong>3.4 Impact of Blocking:</strong> Please note that blocking certain cookies may affect website functionality.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">4. Contact Us</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p>If you have any questions about this Cookie Policy, please contact us:</p>
                  <div className="bg-[#ffebd6] p-4 rounded-lg mt-4">
                    <p><strong>DONDEEZCO Beach Resort</strong></p>
                    <p>Email: privacy@dondeezco.com</p>
                    <p>Phone: +63 123 456 7890</p>
                    <p>Address: Paradise Island, Philippines</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}