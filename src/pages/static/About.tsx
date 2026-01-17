import React from 'react';

const About: React.FC = () => {
  const stats = [
    { label: 'Active Students', value: '10,000+' },
    { label: 'AI Tools', value: '50+' },
    { label: 'Courses', value: '100+' },
    { label: 'Success Rate', value: '95%' },
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      image: '👩‍💼',
      description: 'AI researcher with 15+ years of experience in education technology.',
    },
    {
      name: 'Mike Chen',
      role: 'Head of Technology',
      image: '👨‍💻',
      description: 'Expert in AI and machine learning with a focus on educational applications.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Education',
      image: '👩‍🏫',
      description: 'Former professor with expertise in curriculum development and e-learning.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Empowering Students with AI
            </h1>
            <p className="text-xl sm:text-2xl max-w-2xl mx-auto">
              We're on a mission to revolutionize education by making AI technology accessible and
              practical for every student.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              AI for Students is dedicated to democratizing artificial intelligence education. We believe
              that every student should have access to cutting-edge AI tools and knowledge, regardless
              of their background or location.
            </p>
            <p className="text-xl text-gray-600">
              Through our platform, we provide students with hands-on experience in AI technologies,
              preparing them for the future of work and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have questions about our platform or want to learn more? We'd love to hear from you.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About; 