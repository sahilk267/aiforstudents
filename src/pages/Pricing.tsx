import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for getting started with AI education",
      features: [
        "Access to basic AI courses",
        "Community support",
        "Basic progress tracking",
        "Limited practice exercises"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "For serious learners who want to master AI",
      features: [
        "All Basic features",
        "Advanced AI courses",
        "1-on-1 mentoring sessions",
        "Project-based learning",
        "Certificate of completion",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For schools and organizations",
      features: [
        "All Pro features",
        "Custom curriculum",
        "Dedicated support team",
        "School-wide analytics",
        "Teacher training",
        "API access",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const features = [
    {
      title: "Flexible Learning",
      description: "Learn at your own pace with 24/7 access to all courses"
    },
    {
      title: "Expert Support",
      description: "Get help from our team of AI experts and mentors"
    },
    {
      title: "Progress Tracking",
      description: "Monitor your progress with detailed analytics"
    },
    {
      title: "Certificate",
      description: "Earn a certificate upon completion of courses"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Student",
      content: "The Pro plan has been perfect for my learning journey. The 1-on-1 mentoring has helped me understand complex concepts easily.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    },
    {
      name: "Priya Patel",
      role: "School Principal",
      content: "The Enterprise plan has transformed how we teach AI in our school. The custom curriculum and teacher training have been invaluable.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="pt-32 pb-16 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
              Pricing
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Choose Your Learning Path
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              Flexible plans to suit your learning goals and budget
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border ${
                  plan.popular ? 'border-blue-500' : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500 text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="ml-1 text-gray-300">{plan.period}</span>
                    )}
                  </div>
                  <p className="mt-4 text-gray-300">{plan.description}</p>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <svg className="h-5 w-5 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Everything You Need to Succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">
                Can I switch plans later?
              </h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-300">
                We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">
                Is there a refund policy?
              </h3>
              <p className="text-gray-300">
                Yes, we offer a 30-day money-back guarantee for all paid plans.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">
                Do you offer student discounts?
              </h3>
              <p className="text-gray-300">
                Yes, students can get 50% off our Pro plan with a valid student ID.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of students already learning with us
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 