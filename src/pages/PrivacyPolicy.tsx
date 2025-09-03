import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#ffebd6] to-[#f5d5a8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#252627] mb-6">
            Privacy <span className="text-[#ec9909]">Policy</span>
          </h1>
          <p className="text-xl text-[#252627]/80 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
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
                <h2 className="text-2xl font-bold text-[#252627] mb-4">1. Information We Collect</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>1.1 Personal Information:</strong> We collect information you provide directly, such as name, email, phone number, and address when making reservations.</p>
                  <p><strong>1.2 Payment Information:</strong> Credit card and billing information for processing payments securely.</p>
                  <p><strong>1.3 Usage Data:</strong> Information about how you use our website and services, including IP address, browser type, and pages visited.</p>
                  <p><strong>1.4 Communication Records:</strong> Records of your communications with us for customer service purposes.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">2. How We Use Your Information</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>2.1 Service Provision:</strong> To process reservations, provide customer service, and deliver requested services.</p>
                  <p><strong>2.2 Communication:</strong> To send booking confirmations, updates, and respond to inquiries.</p>
                  <p><strong>2.3 Improvement:</strong> To analyze usage patterns and improve our services and website functionality.</p>
                  <p><strong>2.4 Marketing:</strong> To send promotional materials and special offers (with your consent).</p>
                  <p><strong>2.5 Legal Compliance:</strong> To comply with legal obligations and protect our rights.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">3. Information Sharing and Disclosure</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>3.1 Service Providers:</strong> We may share information with trusted third-party service providers who assist in our operations.</p>
                  <p><strong>3.2 Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety.</p>
                  <p><strong>3.3 Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of assets.</p>
                  <p><strong>3.4 Consent:</strong> We may share information with your explicit consent for specific purposes.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">4. Data Security</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>4.1 Security Measures:</strong> We implement appropriate technical and organizational measures to protect your personal information.</p>
                  <p><strong>4.2 Encryption:</strong> Sensitive information is encrypted during transmission and storage.</p>
                  <p><strong>4.3 Access Controls:</strong> Access to personal information is restricted to authorized personnel only.</p>
                  <p><strong>4.4 Regular Updates:</strong> We regularly update our security practices to address new threats.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">5. Cookies and Tracking Technologies</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>5.1 Cookie Usage:</strong> We use cookies to enhance your browsing experience and analyze website traffic.</p>
                  <p><strong>5.2 Types of Cookies:</strong> Essential cookies for functionality, analytics cookies for improvement, and marketing cookies for personalization.</p>
                  <p><strong>5.3 Cookie Control:</strong> You can control cookie settings through your browser preferences.</p>
                  <p><strong>5.4 Third-Party Cookies:</strong> Some cookies may be set by third-party services we use.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">6. Your Rights and Choices</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>6.1 Access:</strong> You have the right to access and review your personal information we hold.</p>
                  <p><strong>6.2 Correction:</strong> You can request correction of inaccurate or incomplete information.</p>
                  <p><strong>6.3 Deletion:</strong> You may request deletion of your personal information, subject to legal requirements.</p>
                  <p><strong>6.4 Opt-out:</strong> You can opt-out of marketing communications at any time.</p>
                  <p><strong>6.5 Data Portability:</strong> You may request a copy of your data in a portable format.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">7. Data Retention</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>7.1 Retention Period:</strong> We retain personal information only as long as necessary for the purposes outlined in this policy.</p>
                  <p><strong>7.2 Legal Requirements:</strong> Some information may be retained longer to comply with legal obligations.</p>
                  <p><strong>7.3 Secure Deletion:</strong> When information is no longer needed, it is securely deleted or anonymized.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">8. International Data Transfers</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>8.1 Cross-Border Transfers:</strong> Your information may be transferred to and processed in countries other than your own.</p>
                  <p><strong>8.2 Safeguards:</strong> We ensure appropriate safeguards are in place for international transfers.</p>
                  <p><strong>8.3 Adequacy Decisions:</strong> We transfer data only to countries with adequate data protection laws or under appropriate safeguards.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">9. Children's Privacy</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p><strong>9.1 Age Restriction:</strong> Our services are not intended for children under 16 years of age.</p>
                  <p><strong>9.2 Parental Consent:</strong> We do not knowingly collect personal information from children without parental consent.</p>
                  <p><strong>9.3 Notification:</strong> If we become aware of collecting information from children, we will take steps to delete it.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#252627] mb-4">10. Contact Us</h2>
                <div className="space-y-4 text-[#252627]/80 leading-relaxed">
                  <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                  <div className="bg-[#ffebd6] p-4 rounded-lg mt-4">
                    <p><strong>Data Protection Officer</strong></p>
                    <p>DONDEEZCO Beach Resort</p>
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