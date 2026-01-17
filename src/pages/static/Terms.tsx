import React from 'react';

const Terms: React.FC = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing and using AI for Students, you agree to be bound by these Terms of Service.',
        'If you do not agree to these terms, please do not use our platform.',
        'We reserve the right to modify these terms at any time.',
      ],
    },
    {
      title: '2. User Accounts',
      content: [
        'You must be at least 13 years old to create an account.',
        'You are responsible for maintaining the confidentiality of your account.',
        'You must provide accurate and complete information when creating an account.',
        'You are responsible for all activities that occur under your account.',
      ],
    },
    {
      title: '3. Platform Usage',
      content: [
        'You agree to use the platform for educational purposes only.',
        'You will not use the platform for any illegal or unauthorized purpose.',
        'You will not violate any laws in your jurisdiction.',
        'You will not interfere with or disrupt the platform or servers.',
      ],
    },
    {
      title: '4. Content and Intellectual Property',
      content: [
        'All content on the platform is owned by AI for Students or its licensors.',
        'You may not copy, modify, or distribute platform content without permission.',
        'You retain rights to content you create and share on the platform.',
        'You grant us license to use, store, and share your content on the platform.',
      ],
    },
    {
      title: '5. Payment Terms',
      content: [
        'Subscription fees are billed in advance on a recurring basis.',
        'You can cancel your subscription at any time.',
        'Refunds are provided according to our refund policy.',
        'We reserve the right to change pricing with notice.',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl">Last updated: March 15, 2024</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-8">
              Welcome to AI for Students. These Terms of Service govern your use of our platform and
              services. Please read them carefully before using our platform.
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
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>Email: legal@aiforstudents.com</li>
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
            These terms are subject to change. We will notify users of any material changes through the
            platform or via email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms; 