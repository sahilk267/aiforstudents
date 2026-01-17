import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '0',
      description: 'Perfect for getting started with AI learning',
      features: [
        'Access to basic AI tools',
        'Limited course content',
        'Community access',
        'Basic progress tracking',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '19.99',
      description: 'Best for serious students and professionals',
      features: [
        'Full access to all AI tools',
        'Unlimited course content',
        'Priority community access',
        'Advanced progress tracking',
        'Expert support',
        'Certificate of completion',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For educational institutions and organizations',
      features: [
        'Custom AI tool integration',
        'Custom course development',
        'Dedicated support team',
        'Advanced analytics',
        'Team management',
        'API access',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Can I switch plans later?',
      answer:
        'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, PayPal, and bank transfers for enterprise plans.',
    },
    {
      question: 'Is there a refund policy?',
      answer:
        'Yes, we offer a 30-day money-back guarantee for all paid plans. No questions asked.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl sm:text-2xl max-w-2xl mx-auto">
              Choose the perfect plan for your learning journey. All plans include access to our core
              features.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {plan.price === 'Custom' ? plan.price : `$${plan.price}`}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-600 ml-1">/month</span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-medium ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help you choose the right plan for your needs.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 