import React from 'react';

const Privacy: React.FC = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, educational background)',
        'Usage data (courses accessed, progress, interactions)',
        'Technical data (IP address, browser type, device information)',
        'Payment information (for paid subscriptions)',
      ],
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our educational services',
        'To personalize your learning experience',
        'To communicate with you about our services',
        'To process payments and maintain accounts',
        'To analyze and improve our platform',
      ],
    },
    {
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures',
        'Your data is encrypted during transmission',
        'Regular security audits and updates',
        'Limited access to personal information',
      ],
    },
    {
      title: 'Your Rights',
      content: [
        'Access your personal data',
        'Request corrections to your data',
        'Delete your account and data',
        'Opt-out of marketing communications',
        'Export your data',
      ],
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'We use cookies to improve user experience',
        'Analytics cookies to understand usage',
        'Essential cookies for platform functionality',
        'You can control cookie preferences',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl">Last updated: March 15, 2024</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-8">
              At AI for Students, we take your privacy seriously. This policy explains how we collect,
              use, and protect your personal information when you use our platform.
            </p>

            {sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                <ul className="list-disc pl-6 space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-gray-50 rounded-lg p-6 mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about our privacy policy or how we handle your data, please
                contact us:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>Email: privacy@aiforstudents.com</li>
                <li>Phone: +91 9773693440</li>
                <li>Address: Juha Lane, Andheri West, Mumbai 400058, Maharashtra, India</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            This privacy policy is subject to change. We will notify users of any material changes
            through the platform or via email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 