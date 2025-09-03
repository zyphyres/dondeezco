import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#252627] mb-6">
            Terms of <span className="text-[#ec9909]">Service</span>
          </h1>
          <p className="text-xl text-[#252627]/80 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our services
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
                <h2 className="text-2xl font-bold text-[#252627] mb-4">1. Acceptance of Terms</h2>
                <p className="text-[#252627]/80 leading-relaxed">
                  By accessing and using DONDEEZCO Beach Resort services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service apply to all visitors, users, and others who access or use our services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">2. Booking and Reservations</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>2.1 Booking Confirmation:</strong> All reservations are subject to availability and confirmation by DONDEEZCO Beach Resort.</p>
                  <p><strong>2.2 Payment:</strong> Full payment or deposit is required at the time of booking as specified during the reservation process.</p>
                  <p><strong>2.3 Check-in/Check-out:</strong> Standard check-in time is 3:00 PM and check-out time is 12:00 PM unless otherwise arranged.</p>
                  <p><strong>2.4 Minimum Age:</strong> Guests must be at least 18 years old to make a reservation.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">3. Cancellation and Refund Policy</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>3.1 Cancellation Period:</strong> Cancellations made 7 days or more before arrival date will receive a full refund minus processing fees.</p>
                  <p><strong>3.2 Late Cancellations:</strong> Cancellations made less than 7 days before arrival will be charged 50% of the total booking amount.</p>
                  <p><strong>3.3 No-Show:</strong> No-show guests will be charged the full amount of their reservation.</p>
                  <p><strong>3.4 Weather Conditions:</strong> Cancellations due to severe weather conditions may be subject to special consideration.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">4. Guest Conduct and Responsibilities</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>4.1 Respectful Behavior:</strong> Guests are expected to behave respectfully towards staff, other guests, and property.</p>
                  <p><strong>4.2 Property Damage:</strong> Guests are responsible for any damage to resort property during their stay.</p>
                  <p><strong>4.3 Noise Policy:</strong> Quiet hours are from 10:00 PM to 7:00 AM to ensure all guests can enjoy their stay.</p>
                  <p><strong>4.4 Safety Compliance:</strong> Guests must follow all safety guidelines and instructions provided by resort staff.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">5. Activities and Services</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>5.1 Activity Participation:</strong> Participation in resort activities is at guests' own risk.</p>
                  <p><strong>5.2 Age Restrictions:</strong> Some activities may have age or health restrictions for safety reasons.</p>
                  <p><strong>5.3 Equipment Use:</strong> Guests are responsible for proper use and return of any equipment provided.</p>
                  <p><strong>5.4 Third-Party Services:</strong> Some activities may be provided by third-party operators with their own terms and conditions.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">6. Limitation of Liability</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>6.1 Resort Liability:</strong> DONDEEZCO Beach Resort's liability is limited to the amount paid for services.</p>
                  <p><strong>6.2 Personal Belongings:</strong> The resort is not responsible for loss or damage to personal belongings.</p>
                  <p><strong>6.3 Medical Emergencies:</strong> Guests are responsible for their own medical insurance and emergency care.</p>
                  <p><strong>6.4 Force Majeure:</strong> The resort is not liable for delays or cancellations due to circumstances beyond our control.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">7. Privacy and Data Protection</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>7.1 Data Collection:</strong> We collect personal information necessary for providing our services.</p>
                  <p><strong>7.2 Data Use:</strong> Personal information is used solely for reservation and service purposes.</p>
                  <p><strong>7.3 Data Security:</strong> We implement appropriate security measures to protect your personal information.</p>
                  <p><strong>7.4 Third Parties:</strong> We do not sell or share personal information with third parties without consent.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">8. Modifications and Updates</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>8.1 Terms Updates:</strong> We reserve the right to modify these terms at any time.</p>
                  <p><strong>8.2 Notification:</strong> Changes will be posted on our website and take effect immediately.</p>
                  <p><strong>8.3 Continued Use:</strong> Continued use of our services constitutes acceptance of modified terms.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">9. Contact Information</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p>If you have any questions about these Terms of Service, please contact us:</p>
                  <div className="bg-[#ffebd6] p-4 rounded-lg mt-4">
                    <p><strong>DONDEEZCO Beach Resort</strong></p>
                    <p>Email: legal@dondeezco.com</p>
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